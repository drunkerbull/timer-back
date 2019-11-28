import {Request, Response, Router} from 'express';
import Task, {ITaskDoc} from '../models/Task';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';
import moment from 'moment';
import Project, {IProjectDoc} from '../models/Project';
import Time from '../models/Time';

const router = Router();


async function formattedTasksFromTime(options: any, requestQuery: any): Promise<ITaskDoc[]> {
  if (requestQuery.average && requestQuery.average !== 'all') {
    options.start = {
      '$gte': moment().subtract(1, requestQuery.average).startOf('day').toDate(),
      '$lt': moment().add(1, 'day').startOf('day').toDate()
    };
  }
  const times: any[] = await Time.find(options).populate('owner worker task project').exec();

  const tasks: ITaskDoc[] = [];
  for (let i = 0; i < times.length; i++) {
    let time = times[i];
    time.task.project = time.project;
    time.task.owner = time.owner;
    time.task.worker = time.worker;
    const findIndexTask = tasks.findIndex((task: ITaskDoc) => task._id.toString() === time.task._id.toString());
    if (findIndexTask < 0) {
      tasks.push(time.task);
    } else {
      tasks[findIndexTask].total = tasks[findIndexTask].total + time.total;
    }
  }

  return tasks;
}

router.get('/api/statistics/worker', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const options = {'worker': reqAuth.user._id};
    const tasks: ITaskDoc[] = await formattedTasksFromTime(options, req.query);
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

router.get('/api/statistics/owner', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const options = {'owner': reqAuth.user._id};
    const tasks: ITaskDoc[] = await formattedTasksFromTime(options, req.query);
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

router.get('/api/statistics/owner-project', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const projects: IProjectDoc[] = await Project.find({'owner': reqAuth.user._id});
    const projectsIds = projects.map((project) => project._id);

    const options = {'project': {'$in': projectsIds}, 'total': {$gt: 10}};
    const tasks: ITaskDoc[] = await formattedTasksFromTime(options, req.query);
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/statistics/me', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const projectsOwner: number = await Project.countDocuments({'owner': reqAuth.user._id});
    const projectsWorker: number = await Project.countDocuments({'workers': {$in: reqAuth.user._id}});
    const tasksOwner: number = await Task.countDocuments({'owner': reqAuth.user._id});
    const tasksWorker: number = await Task.countDocuments({'worker': reqAuth.user._id});

    res.send({projectsOwner, projectsWorker, tasksOwner, tasksWorker});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
