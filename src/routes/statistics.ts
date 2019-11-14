import {Request, Response, Router} from 'express';
import Task, {ITaskDoc} from '../models/Task';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';
import moment from 'moment';

const router = Router();

router.get('/api/statistics', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    let options: any = {'worker': reqAuth.user._id};
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
