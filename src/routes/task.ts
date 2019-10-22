import {Request, Response, Router} from 'express';
import ErrorHandling from '../error-handling';
import Project, {IProjectDoc} from '../models/Project';
import auth, {RequestAuth} from '../middleware/auth';
import Task, {ITaskDoc} from '../models/Task';

const router = Router();

router.get('/tasks', auth, async (req: Request, res: Response) => {
  try {
    const task: ITaskDoc[] = await Task.find({});
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.post('/tasks', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    if (!reqAuth.body.name) {
      throw new Error('add all info');
    }
    if (!reqAuth.user) {
      throw new Error('Not authorization');
    }
    const project: IProjectDoc | null = await Project.findById(req.body.project);
    if (!project) {
      throw new Error('Project not exist');
    }
    const taskCheck: ITaskDoc | null = await Task.findByCredentials({name: req.body.name});
    if (taskCheck) {
      throw new Error('Task exist');
    }
    const pack = {
      ...req.body,
      owner: reqAuth.user._id,
    };
    const task: ITaskDoc = new Task(pack);
    await task.save();
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/tasks/:id', auth, async (req: Request, res: Response) => {
  try {
    const task: ITaskDoc | null = await Task.findById(req.params.id);
    if (!task) {
      throw new Error('Task not found');
    }
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/tasks/:id', auth, async (req: Request, res: Response) => {
  try {
    const task: ITaskDoc | null = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!task) {
      throw new Error('Task not found');
    }
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.post('/tasks/:id/timer', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const task: ITaskDoc | null = await Task.findById(req.params.id);
    if (!task) {
      throw new Error('Task not found');
    }
    const pack = {
      ...req.body,
      owner: reqAuth.user._id,
    };
    task.timers.push(pack);
    await task.save();
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/tasks/:id/timer', auth, async (req: Request, res: Response) => {
  try {
    const task: ITaskDoc | null = await Task.findById(req.params.id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.timers[req.body.index].start = req.body.start;
    task.timers[req.body.index].end = req.body.end;
    await task.save();
    res.send(task);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/tasks/:id/timer', auth, async (req: Request, res: Response) => {
  try {
    const task: ITaskDoc | null = await Task.findById(req.params.id);
    if (!task) {
      throw new Error('Task not found');
    }
    task.timers.splice(req.body.index, 1);
    await task.save();
    res.send({message: 'Timer removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/tasks/:id', auth, async (req: Request, res: Response) => {
  try {
    const task: ITaskDoc | null = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      throw new Error('Task not found');
    }
    res.send({message: 'Task removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

export default router;
