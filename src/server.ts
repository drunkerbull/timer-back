import app from './app';
import messagesSockets from './sockets/messages';
import jwt from 'jsonwebtoken';
import User, {IUserDoc} from './models/User';
import authSocket from './middleware/authSocket';

const server = app.listen(process.env.PORT || 5000, () => {
  console.log('server run');
});

const io = require('socket.io')(server);
io.use(authSocket);
io.on('connection', (socket: any) => {
  console.log('some connect')
  messagesSockets(socket);
  socket.on('disconnect', () => {
    console.log('some disconnect');
  });
});


export default server;
