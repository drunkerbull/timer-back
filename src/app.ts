import express, {Application} from 'express';
import dotenv from 'dotenv';
import DB from './db/mongoose';
import authRouter from './routes/auth';
import userRouter from './routes/user';
import taskRouter from './routes/task';
import projectRouter from './routes/project';
import cors from 'cors';

dotenv.config();

const path = require('path');
const db = DB.init(process.env.DB_USER, process.env.DB_PASS, process.env.DB_BASE);

const app: Application = express();
app.use(cors());

app.set('port', 5000);

app.use(express.json());

app.use(authRouter);
app.use(userRouter);
app.use(taskRouter);
app.use(projectRouter);

app.use(express.static(__dirname + '/views'));


app.get('**', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/views/index.html'));
});

export default app;
