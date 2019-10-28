import {Request, Response, Router} from 'express';
import Task, {ITaskDoc} from '../models/Task';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';

const router = Router();

router.get('/api/statistics', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    if (!reqAuth.user) {
      throw new Error('Not authorization');
    }

    const tasks: ITaskDoc[] = await Task.find({'worker': reqAuth.user._id}).populate('worker')
      .populate('owner').populate('project').exec();
    res.send(tasks);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
