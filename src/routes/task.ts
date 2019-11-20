import {Request, Response, Router} from 'express';
import ErrorHandling from '../error-handling';
import Project, {IProjectDoc} from '../models/Project';
import auth, {RequestAuth} from '../middleware/auth';
import Task, {ITask, ITaskDoc} from '../models/Task';
import paramMongoId from '../middleware/paramMongoId';
import mongoose from 'mongoose';
import User, {IUserDoc} from '../models/User';

const router = Router();


router.post('/api/tasks', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<ITask>;
  try {
    if (!reqAuth.body.name) throw new Error('add all info');

    const project: IProjectDoc | null = await Project.findById(req.body.project);
    if (!project) throw new Error('Project not exist');

    const owner: mongoose.Schema.Types.ObjectId | undefined = project.workers.find((id) => id.toString() === reqAuth.user._id.toString());
    if (!owner) throw new Error('You are not working in this project');

    const task: ITaskDoc | null = await Task.findByCredentials({name: req.body.name});
    if (task) throw new Error('Task exist');

    const user: IUserDoc | null = await User.findUserById(reqAuth.body.worker);
    if (user.blockEveryoneWhoWantAddMeToProject) throw new Error('This user has blocked the ability to add it to projects');
    if (!user.checkBlackList(reqAuth.user._id)) throw new Error('This user add you to black list');

    const pack = {...req.body, owner};
    const newTask: ITaskDoc = new Task(pack);
    await newTask.save();

    res.send(newTask);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

router.put('/api/tasks/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<ITask>;
  try {
    const task: ITaskDoc = await Task.findTaskById(reqAuth);
    task.timerStarted = reqAuth.body.timerStarted;
    if (reqAuth.body.total && reqAuth.body.total - task.total > 10000) task.total = reqAuth.body.total;
    await task.save();

    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});


router.delete('/api/tasks/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const task: ITaskDoc = await Task.findTaskById(reqAuth);
    if (task.timerStarted) {
      throw new Error('You cant delete task if timer started');
    }
    await task.remove();

    res.send({message: 'Task removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});


export default router;
