import {Request, Response, Router} from 'express';
import ErrorHandling from '../error-handling';
import Project, {IProject, IProjectDoc} from '../models/Project';
import auth, {RequestAuth} from '../middleware/auth';
import paramMongoId from '../middleware/paramMongoId';
import User, {IUserDoc} from '../models/User';
import validator from 'validator';


const router = Router();


router.get('/api/projects', auth, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth;
  try {
    const project: IProjectDoc[] = await Project.find(
      {
        'workers': {$in: [reqPack.user._id]}
      }
    ).populate('owner').exec();
    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});


router.post('/api/projects', auth, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth<IProject>;
  try {
    if (!reqPack.body.name) {
      throw new Error('add all info');
    }
    const projectCheck: IProjectDoc | null = await Project.findByCredentials(req.body);
    if (projectCheck) {
      throw new Error('Project exist');
    }
    const pack = {
      ...req.body,
      owner: reqPack.user._id,
      workers: [reqPack.user._id]
    };
    const project: IProjectDoc = new Project(pack);
    await project.save();
    await project.populate('owner workers').execPopulate();
    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/projects/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  try {
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.populate('owner workers').execPopulate();
    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/api/projects/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth<IProject>;
  try {
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    if (project.owner.toString() !== reqPack.user._id.toString()) {
      throw new Error('You are not owner of project');
    }
    project.name = reqPack.body.name;
    await project.save();
    await project.populate('owner workers').execPopulate();
    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/api/projects/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth;
  try {
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    if (project.owner.toString() !== reqPack.user._id.toString()) {
      throw new Error('You are not owner of project');
    }
    await project.remove();
    res.send({message: 'Project removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/projects/:id/tasks', auth, paramMongoId, async (req: Request, res: Response) => {
  try {
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    await project.populate('tasks').execPopulate();
    await Project.populate(project.tasks, [{path: 'owner', model: 'User'}, {path: 'worker', model: 'User'}]);
    res.send(project.tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export interface IProjectWorker {
  email: string
}
router.post('/api/projects/:id/worker', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth<IProjectWorker>;
  try {
    if (!reqPack.body.email) {
      throw new Error('Not found email');
    }
    if (!validator.isEmail(reqPack.body.email)) {
      throw new Error('It is not email');
    }
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    if (project.owner.toString() !== reqPack.user._id.toString()) {
      throw new Error('You are not owner of project');
    }
    const user: IUserDoc | null = await User.findOne({email: reqPack.body.email});
    if (!user) {
      throw new Error('User not found');
    }
    project.workers.push(user._id);
    await project.save();
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/api/projects/:id/worker/:idworker', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth;
  try {
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) {
      throw new Error('Project not found');
    }
    if (project.owner.toString() !== reqPack.user._id.toString()) {
      throw new Error('You are not owner of project');
    }
    const user: IUserDoc | null = await User.findById(req.params.idworker);
    if (!user) {
      throw new Error('User not found');
    }
    project.workers = project.workers.filter((person) => person.toString() !== user._id.toString());
    await project.save();
    res.send({message: 'Worker deleted from project'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
