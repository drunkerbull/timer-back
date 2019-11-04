import User, {IUserDoc} from '../models/User';

class Messages {
  socket: any;

  constructor(socket: any) {
    this.socket = socket;

    this.socket.on('rooms', () => {
      this.socket.emit('onRooms', [
        {
          name: 'Oleh Back',
          id: 1
        },
        {
          name: 'Oles',
          id: 2
        },
        {
          name: 'Bitch',
          id: 3
        }
      ]);
    });

    this.socket.on('searchUsers', async (searchVal: any) => {
      try {
        console.log(searchVal)
        const users: IUserDoc[] = await User.find({'email': new RegExp(searchVal, 'i')});
        console.log(users)
        this.socket.emit('onSearchUsers', users);
      } catch (e) {
        this.socket.emit('onSearchUsers', {error: e});
      }
    });
  }
}

const messagesSockets = (socket: any) => new Messages(socket);

export default messagesSockets;
