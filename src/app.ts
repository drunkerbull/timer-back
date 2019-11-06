import express, {Application} from 'express';
import dotenv from 'dotenv';
import DB from './db/mongoose';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import taskRouter from './routes/task';
import statisticsRouter from './routes/statistics';
import projectRouter from './routes/project';
import cors from 'cors';
import http from 'http';
import authSocket from './middleware/authSocket';
import messagesSockets from './sockets/messages';

dotenv.config();

const path = require('path');
const db = DB.init(process.env.DB_USER, process.env.DB_PASS, process.env.DB_BASE);

const app: Application = express();
app.use(cors());

export const server = http.createServer(app);
const io = require('socket.io')(server);
io.use(authSocket);
io.on('connection', (socket: any) => {
  console.log('some connect', socket.user._id, socket.user.nickname);

  messagesSockets(io,socket);

  socket.on('disconnect', async () => {
    socket.user.online = null;
    await socket.user.save();
    console.log('some disconnect', socket.user._id, socket.user.nickname);
  });
});

app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(taskRouter);
app.use(statisticsRouter);
app.use(projectRouter);

app.use(express.static(__dirname + '/views'));


app.get('**', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

export default app;
