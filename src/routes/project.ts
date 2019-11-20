import {Request, Response, Router} from 'express';
import ErrorHandling from '../error-handling';
import Project, {IProject, IProjectDoc} from '../models/Project';
import auth, {RequestAuth} from '../middleware/auth';
import paramMongoId from '../middleware/paramMongoId';
import User, {IUserDoc} from '../models/User';
import Task, {ITaskDoc} from '../models/Task';


const router = Router();


router.get('/api/projects', auth, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth;
  let options: any = {limit: 16, skip: 0, sort: {createdAt: 'desc'}};
  if (req.query.limit) options.limit = +req.query.limit;
  if (req.query.skip) options.skip = +req.query.skip;
  if (req.query.sort) options.sort.createdAt = req.query.sort;

  let match: any = {workers: {$in: [reqPack.user._id]}};
  if (req.query.type === 'owner') match.owner = reqPack.user._id;

  try {
    const project: IProjectDoc[] = await Project.find(match, null, options).populate('owner').exec();

    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});


router.post('/api/projects', auth, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth<IProject>;
  try {
    if (!reqPack.body.name) throw new Error('add all info');

    const projectCheck: IProjectDoc | null = await Project.findByCredentials(req.body);
    if (projectCheck) throw new Error('Project exist');

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
    if (!project) throw new Error('Project not found');

    await project.populate('owner workers').execPopulate();

    res.send(project);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/api/projects/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth<IProject>;
  try {
    const project: IProjectDoc = await Project.findProjectById(reqPack);
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
    const project: IProjectDoc = await Project.findProjectById(reqPack);
    await project.remove();

    res.send({message: 'Project removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/projects/:id/tasks', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth;
  let options: any = {limit: 16, skip: 0, sort: {createdAt: 'desc'}};
  if (req.query.limit) options.limit = +req.query.limit;
  if (req.query.skip) options.skip = +req.query.skip;
  if (req.query.sort) options.sort.createdAt = req.query.sort;

  let match: any = {project: {$in: [reqPack.params.id]}};
  if (req.query.type === 'owner') match.owner = reqPack.user._id;
  if (req.query.search) match.name = new RegExp(req.query.search, 'i');
  try {
    const project: IProjectDoc | null = await Project.findById(req.params.id);
    if (!project) throw new Error('Project not found');

    const tasks: ITaskDoc[] | null = await Task.find(match, null, options).populate('owner worker').exec();
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});


router.post('/api/projects/:id/worker', auth, paramMongoId, async (req: Request, res: Response) => {
  const reqPack = req as RequestAuth<{ nickname: string }>;
  try {
    if (!reqPack.body.nickname) throw new Error('Not found nickname');

    const project: IProjectDoc = await Project.findProjectById(reqPack);

    const user: IUserDoc | null = await User.findOne({nickname: reqPack.body.nickname});
    if (!user) throw new Error('User not found');
    if (user.blockEveryoneWhoWantAddMeToProject) throw new Error('This user has blocked the ability to add it to projects');
    if (!user.checkBlackList(reqPack.user._id)) throw new Error('This user add you to black list');

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
    const project: IProjectDoc = await Project.findProjectById(reqPack);

    const user: IUserDoc | null = await User.findById(reqPack.params.idworker);
    if (!user) throw new Error('User not found');

    project.workers = project.workers.filter((person) => person.toString() !== user._id.toString());
    await project.save();

    res.send({message: 'Worker deleted from project'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
