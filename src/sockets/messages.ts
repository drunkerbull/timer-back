import User, {IUserDoc} from '../models/User';
import Room, {IRoomDoc} from '../models/Room';
import Message, {IMessageDoc} from '../models/Message';

class Messages {
  socket: any;
  io: any;

  constructor(io: any, socket: any) {
    this.socket = socket;
    this.io = io;
    this.socket.on('rooms', async () => {
      try {
        const rooms: IRoomDoc[] = await this.userRooms(this.socket.user._id);
        this.socket.emit('onRooms', rooms);
      } catch (e) {
        this.socket.emit('onRooms', {error: e});
      }
    });

    this.socket.on('searchUsers', async (searchVal: any) => {
      try {
        const users: IUserDoc[] = await User.find({
          'email': new RegExp(searchVal, 'i'),
          '_id': {$ne: this.socket.user._id}
        });
        this.socket.emit('onSearchUsers', users);
      } catch (e) {
        this.socket.emit('onSearchUsers', {error: e});
      }
    });


    this.socket.on('selectOrCreateRoom', async (userTo: any) => {
      try {
        const user: IUserDoc | null = await User.findById(userTo._id);
        if (!user) {
          throw new Error('UserTo not found');
        }
        const room: IRoomDoc | null = await Room.findOne({
          $and: [{'group': user!._id}, {'group': this.socket.user._id}]
        });
        if (room) {
          console.log('found room', room);
          this.socket.emit('onRoom', room);
        } else {
          console.log('not found room, create');
          const pack = {
            name: '',
            owner: this.socket.user._id,
            group: [this.socket.user._id, user!._id],
            messages: []
          };
          const room: IRoomDoc = new Room(pack);
          await room.save();

          if (user.online) {
            this.socket.to(user.online).emit('onRooms', await this.userRooms(user._id));
          }
          this.joinToRoom(room!._id);
          await room.populate('group').execPopulate();
          this.socket.emit('onRoom', room);
        }
      } catch (e) {
        this.socket.emit('onRoom', {error: e});
      }
    });


    this.socket.on('selectRoom', async ({_id}: any) => {
      try {
        const room: IRoomDoc | null = await Room.findById(_id);
        if (!room) {
          this.socket.emit('onRoom', {error: 'Not Found room'});
        }
        await room!.populate('messages group').execPopulate();
        this.joinToRoom(room!._id);
        this.socket.emit('onRoom', room);
      } catch (e) {
        this.socket.emit('onRoom', {error: e});

      }

    });

    this.socket.on('message', async (pack: any) => {
      try {
        const currentRoom: IRoomDoc | null = await Room.findById(pack.room);
        if (!currentRoom) {
          throw new Error('Room not found');
        }
        pack.room = currentRoom._id;
        pack.owner = this.socket.user._id;
        const message: IMessageDoc = new Message(pack);
        await message.save();
        await message.populate('owner').execPopulate();
        currentRoom.messages.push(message._id);
        await currentRoom.save();
        await currentRoom.populate('messages group').execPopulate();
        const users: IUserDoc[] = await this.usersWhoAreOnlineButNotInRoom(currentRoom);
        for (const user of users) {
          this.socket.to(user.online).emit('onNotiMessage', message);
        }

        this.socket.to(pack.room._id).emit('onRoom', currentRoom);
      } catch (e) {
        this.socket.emit('onRoom', {error: e});
      }

    });
  }

  joinToRoom(id: any) {
    Object.keys(this.socket.rooms).map((room: any) => this.socket.leave(room));
    this.socket.join(id);
  }

  async userRooms(id: string): Promise<IRoomDoc[]> {
    return await Room.find({'group': {$in: [id]}})
      .populate('group').exec();
  }

  async usersWhoAreOnlineButNotInRoom(room: IRoomDoc): Promise<IUserDoc[]> {
    return new Promise((res, rej) => {
      this.io.in(room._id).clients((err: any, clients: any) => {
        if (err) return rej('error usersWhoAreOnlineButNotInRoom');
        const users: any = room.group.filter((o1: any) => clients.filter((o2: any) => o1.online && o1.online !== o2).length !== 0);
        res(users);
      });
    });
  }

}

const messagesSockets = (io: any, socket: any) => new Messages(io, socket);

export default messagesSockets;
