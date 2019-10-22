import {NextFunction, Request, Response, Router} from 'express';
import ErrorHandling from '../error-handling';
import Project, {IProjectDoc} from '../models/Project';
import auth, {RequestAuth} from '../middleware/auth';
import User, {IUserDoc} from '../models/User';

const router = Router();

router.get('/projects', auth, async (req: Request, res: Response) => {
  try {
    const project: IProjectDoc[] = await Project.find();
    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.post('/projects', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    if (!reqAuth.body.name) {
      throw new Error('add all info');
    }
    if (!reqAuth.user) {
      throw new Error('Not authorization');
    }
    const projectCheck: IProjectDoc | null = await Project.findByCredentials(req.body);
    if (projectCheck) {
      throw new Error('Project exist');
    }
    const pack = {
      ...req.body,
      owner: reqAuth.user._id,
      workers: [reqAuth.user._id]
    };
    const project: IProjectDoc = new Project(pack);
    await project.save();
    await project.populate('owner').execPopulate();
    await project.populate('workers').execPopulate();

    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/projects/:id', auth, async (req: Request, res: Response) => {
  try {
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.populate('owner').execPopulate();
    await project.populate('workers').execPopulate();
    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/projects/:id', auth, async (req: Request, res: Response) => {
  try {
    const project: IProjectDoc | null = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!project) {
      throw new Error('Project not found');
    }
    await project.populate('owner').execPopulate();
    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/projects/:id', auth, async (req: Request, res: Response, next: NextFunction) => {
  try {
    const project: IProjectDoc | null = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    res.send({message: 'Project removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/projects/:id/tasks', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    if (!reqAuth.user) {
      throw new Error('Not authorization');
    }
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.populate('tasks').execPopulate();
    res.send(project.tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.post('/projects/:id/worker', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    if (!reqAuth.body.name) {
      throw new Error('Not found name');
    }
    if (!reqAuth.user) {
      throw new Error('Not authorization');
    }
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    const user: IUserDoc | null = await User.findOne({name: reqAuth.body.name});
    if (!user) {
      throw new Error('User not found');
    }
    project.workers.push(user._id);
    await project.save();
    res.send({message: 'Worker added to project'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/projects/:id/worker', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    if (!reqAuth.body.name) {
      throw new Error('Not found name');
    }
    if (!reqAuth.user) {
      throw new Error('Not authorization');
    }
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    const user: IUserDoc | null = await User.findOne(reqAuth.body);
    if (!user) {
      throw new Error('User not found');
    }
    project.workers = project.workers.filter((person) => {
      return person !== user._id + '';
    });
    await project.save();
    res.send({message: 'Worker deleted from project'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
