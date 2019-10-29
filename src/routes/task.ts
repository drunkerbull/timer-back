import {Request, Response, Router} from 'express';
import ErrorHandling from '../error-handling';
import Project, {IProjectDoc} from '../models/Project';
import auth, {RequestAuth} from '../middleware/auth';
import Task, {ITask, ITaskDoc} from '../models/Task';
import paramMongoId from '../middleware/paramMongoId';

const router = Router();


router.post('/api/tasks', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<ITask>;
  try {
    if (!reqAuth.body.name) {
      throw new Error('add all info');
    }
    const project: IProjectDoc | null = await Project.findById(req.body.project);
    if (!project) {
      throw new Error('Project not exist');
    }
    const owner = project.workers.find((id) => id.toString() === reqAuth.user._id.toString());
    if (!owner) {
      throw new Error('You are not working in this project');
    }
    const taskCheck: ITaskDoc | null = await Task.findByCredentials({name: req.body.name});
    if (taskCheck) {
      throw new Error('Task exist');
    }
    const pack = {
      ...req.body,
      owner
    };
    const task: ITaskDoc = new Task(pack);
    await task.save();
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

router.put('/api/tasks/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<ITask>;
  try {
    const task: ITaskDoc | null = await Task.findById(req.params.id);
    if (!task) {
      throw new Error('Task not found');
    }
    if (task.owner.toString() !== reqAuth.user._id.toString() || task.worker.toString() !== reqAuth.user._id.toString()) {
      throw new Error('You are not working in this task');
    }
    task.timerStarted = reqAuth.body.timerStarted;
    if (reqAuth.body.total) {
      task.total = reqAuth.body.total;
    }
    await task.save();
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});


router.delete('/api/tasks/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const task: ITaskDoc | null = await Task.findById(req.params.id);
    if (!task) {
      throw new Error('Task not found');
    }
    if (task.owner.toString() !== reqAuth.user._id.toString() || task.worker.toString() !== reqAuth.user._id.toString()) {
      throw new Error('You are not working in this task');
    }
    await task.remove();
    res.send({message: 'Task removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

export default router;
