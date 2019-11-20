import {Request, Response, Router} from 'express';
import Task, {ITaskDoc} from '../models/Task';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';
import moment from 'moment';
import Project, {IProjectDoc} from '../models/Project';

const router = Router();

router.get('/api/statistics/worker', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    let options: any = {'worker': reqAuth.user._id, 'total': {$gt: 10}};
    if (req.query.average) {
      options.createdAt = {
        '$gte': moment().subtract(1, req.query.average).startOf('day').toDate(),
        '$lt': moment().add(1, 'day').startOf('day').toDate()
      };
    }

    const tasks: ITaskDoc[] = await Task.find(options).populate('worker owner project').exec();
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/statistics/owner', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    let options: any = {'owner': reqAuth.user._id, 'total': {$gt: 10}};
    if (req.query.average) {
      options.createdAt = {
        '$gte': moment().subtract(1, req.query.average).startOf('day').toDate(),
        '$lt': moment().add(1, 'day').startOf('day').toDate()
      };
    }

    const tasks: ITaskDoc[] = await Task.find(options).populate('worker owner project').exec();
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/statistics/owner-project', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    let ownerProject: any = {'owner': reqAuth.user._id};
    const projects: IProjectDoc[] = await Project.find(ownerProject);
    const projectsIds = projects.map((project) => project._id);

    let options: any = {'project': {'$in': projectsIds}, 'total': {$gt: 10}};
    if (req.query.average) {
      options.createdAt = {
        '$gte': moment().subtract(1, req.query.average).startOf('day').toDate(),
        '$lt': moment().add(1, 'day').startOf('day').toDate()
      };
    }
    const tasks: ITaskDoc[] = await Task.find(options).populate('worker owner project').exec();

    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
