import User, {IUserDoc} from '../models/User';
import Room, {IRoomDoc} from '../models/Room';

class Messages {
  socket: any;

  constructor(socket: any) {
    this.socket = socket;

    this.socket.on('rooms', async() => {
      try{
        const currentUser = await this.socket.user.populate('rooms').execPopulate()
        this.socket.emit('onRooms', currentUser.rooms);
      }
      catch (e) {
        this.socket.emit('onRooms', {error:e});

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
            name: 'TestRoom' + Math.random(),
            owner: this.socket.user._id,
            group: [this.socket.user._id, user!._id],
            messages: []
          };
          const room: IRoomDoc = new Room(pack);
          await room.save();

          this.socket.user.rooms.push(room._id)
          await this.socket.user.save()

          user!.rooms.push(room._id)
          await user!.save()

          this.socket.emit('onRoom', room);
        }
      } catch (e) {
        this.socket.emit('onRoom', {error: e});
      }
    });
  }
}

const messagesSockets = (socket: any) => new Messages(socket);

export default messagesSockets;
