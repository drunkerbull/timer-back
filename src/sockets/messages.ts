import User, {IUserDoc} from '../models/User';
import Room, {IRoomDoc} from '../models/Room';
import Message, {IMessage, IMessageDoc} from '../models/Message';
import * as mongoose from 'mongoose';

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
    this.socket.on('changeMessage', async (message: IMessageDoc) => {
      try {
        const newMessage: IMessageDoc | null = await Message.findById(message._id);
        if (!newMessage) throw new Error('Message not found');

        newMessage.text = message.text;
        await newMessage.save();
      } catch (e) {
        this.socket.emit('onRooms', {error: e});
      }
    });
    this.socket.on('deleteMessage', async (message: IMessageDoc) => {
      try {
        const newMessage: IMessageDoc | null = await Message.findById(message._id);
        if (!newMessage) throw new Error('Message not found');
        await newMessage.remove();
      } catch (e) {
        this.socket.emit('onRooms', {error: e});
      }
    });
    this.socket.on('searchUsers', async (searchVal: string) => {
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


    this.socket.on('selectOrCreateRoom', async (userTo: IUserDoc) => {
      try {
        const user: IUserDoc | null = await User.findUserById(userTo._id);

        const room: IRoomDoc | null = await Room.findOne({
          $and: [{'group': user._id}, {'group': this.socket.user._id}]
        });
        const correctRoom = room ? room : await this.createRoomForTwoUser(userTo);
        this.socket.emit('onRoom', correctRoom);
      } catch (e) {
        this.socket.emit('onRoom', {error: e});
      }
    });


    this.socket.on('selectRoom', async (selectedRoom: IRoomDoc) => {
      try {
        const room: IRoomDoc | null = await Room.findById(selectedRoom._id);
        if (!room) throw new Error('Room not found');

        const readExist = room.read.filter(el => el === this.socket.user._id);
        if (!readExist.length) {
          room.read.push(this.socket.user._id);
        }
        await room.save();
        await room.populate('group').execPopulate();
        await room.populate({path: 'messages', options: {limit: 15, sort: {createdAt: 'desc'}}}).execPopulate();
        this.joinToRoom(room._id);
        this.socket.emit('onRoom', room);
      } catch (e) {
        this.socket.emit('onRoom', {error: e});
      }

    });
    this.socket.on('leaveAllRoom', () => {
      this.leaveAllRooms();
    });
    this.socket.on('loadMoreMessages', async ({room, options}: { room: IRoomDoc, options: any }) => {
      try {
        const currentRoom: IRoomDoc | null = await Room.findById(room);
        if (!currentRoom) throw new Error('Room not found');

        let stableOptions = {limit: 15, sort: {createdAt: 'desc'}};
        await currentRoom.populate({path: 'messages', options: {...stableOptions, ...options}}).execPopulate();
        this.socket.emit('onLoadMoreMessages', currentRoom);
      } catch (e) {
        this.socket.emit('onLoadMoreMessages', {error: e});
      }
    });
    this.socket.on('message', async (message: IMessage, cb: any) => {
      try {
        const currentRoom: IRoomDoc | null = await Room.findById(message.room);
        if (!currentRoom) throw new Error('Room not found');
        message.room = currentRoom._id;
        message.owner = this.socket.user._id;

        const newMessage: IMessageDoc = new Message(message);
        await newMessage.save();
        await newMessage.populate('owner').execPopulate();
        currentRoom.messages.push(newMessage._id);

        await currentRoom.populate('group').execPopulate();
        const users = await this.usersWhoAreOnlineFromGroupRoom(currentRoom);
        for (const user of users.notInRoom) {
          this.socket.to(user.online).emit('onNotiMessage', newMessage);
        }
        currentRoom.read = users.inRoom.map((user: IUserDoc) => user._id);
        await currentRoom.save();
        await currentRoom.populate({path: 'messages', options: {limit: 15, sort: {createdAt: 'desc'}}}).execPopulate();
        if (cb) cb(newMessage);
        this.socket.to(newMessage.room).emit('onRoom', currentRoom);
      } catch (e) {
        this.socket.emit('onRoom', {error: e});
      }

    });
  }

  leaveAllRooms() {
    let rooms: string[] = Object.keys(this.socket.rooms);
    rooms.shift(); // first room is default for socketio
    if (rooms.length) {
      rooms.map((room: string) => {
        this.socket.leave(room);
      });
    }
  }

  joinToRoom(id: mongoose.Schema.Types.ObjectId) {
    this.leaveAllRooms();
    this.socket.join(id);
  }

  async userRooms(id: mongoose.Schema.Types.ObjectId): Promise<IRoomDoc[]> {
    return await Room.find({'group': {$in: [id]}})
      .populate('group').exec();
  }

  async usersWhoAreOnlineFromGroupRoom(room: IRoomDoc): Promise<{ inRoom: IUserDoc[], notInRoom: IUserDoc[] }> {
    return new Promise((res, rej) => {
      this.io.in(room._id).clients((err: any, clients: string[]) => {
        if (err) return rej('error usersWhoAreOnlineButNotInRoom');
        let inRoom: IUserDoc[] = [];
        let notInRoom: IUserDoc[] = [];
        room.group.map((user: IUserDoc) => {
          if (!clients.includes(user.online)) {
            notInRoom.push(user);
          } else {
            inRoom.push(user);
          }
        });
        res({inRoom, notInRoom});
      });
    });
  }


  async createRoomForTwoUser(userTo: IUserDoc) {
    const pack = {
      name: '',
      owner: this.socket.user._id,
      group: [this.socket.user._id, userTo!._id],
      read: [this.socket.user._id],
      messages: []
    };
    const newRoom: IRoomDoc = new Room(pack);
    await newRoom.save();

    if (userTo.online) {
      this.socket.to(userTo.online).emit('onRooms', await this.userRooms(userTo._id));
    }
    this.joinToRoom(newRoom._id);
    await newRoom.populate('group').execPopulate();
    return newRoom;
  }
}

const messagesSockets = (io: any, socket: any) => new Messages(io, socket);

export default messagesSockets;
