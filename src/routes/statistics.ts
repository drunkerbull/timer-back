import {Request, Response, Router} from 'express';
import Task, {ITaskDoc} from '../models/Task';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';
import moment from 'moment';

const router = Router();

router.get('/api/statistics', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    if (!reqAuth.user) {
      throw new Error('Not authorization');
    }
    let options = {
      'worker': reqAuth.user._id
    };
    let average = req.query.average;
    if (average) {
      // @ts-ignore
      options.createdAt = {
        '$gte': moment().subtract(1, average).startOf('day').toDate(),
        '$lt': moment().add(1, 'day').startOf('day').toDate()
      };
    }
    console.log(options)
    const tasks: ITaskDoc[] = await Task.find(options)
      .populate('worker')
      .populate('owner').populate('project').exec();
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
