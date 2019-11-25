import {Request, Response, Router} from 'express';
import auth, {RequestAuth} from '../middleware/auth';
import ErrorHandling from '../error-handling';
import Task, {ITaskDoc} from '../models/Task';
import Time, {ITime, ITimeDoc} from '../models/Time';
import moment from 'moment';

const router = Router();


router.post('/api/time', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<ITime>;
  try {
    const pack = {
      ...reqAuth.body,
      owner: reqAuth.user._id
    };

    const task: ITaskDoc | null = await Task.findById(pack.task);
    if (!task) throw new Error('Task not found');

    const time: ITimeDoc = new Time(pack);
    await time.save();

    task.times.push(time._id);
    await task.save();

    reqAuth.user.currentTimer = time._id;
    await reqAuth.user.save();

    res.send(time);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/api/time/:id', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<ITime>;
  const updates = Object.keys(reqAuth.body);
  const allowedUpdates = ['start', 'end'];
  const isValidOperation = updates.every((update: string) => allowedUpdates.includes(update));
  try {
    if (!isValidOperation) throw new Error('Invalid data');

    const time: ITimeDoc | null = await Time.findById(reqAuth.params.id);
    if (!time) throw new Error('Time not found');
    if (time.owner.toString() !== reqAuth.user.id) throw new Error('You are not the owner of this time');
    Object.assign(time, reqAuth.body);

    if (time.start && time.end) {
      time.total = moment(time.end).diff(moment(time.start));
    }
    await time.save();

    const task: ITaskDoc | null = await Task.findById(time.task).populate({
      path: 'times',
      model: 'Time'
    }).exec();
    if (!task) throw new Error('Task not found, cant save total time');

    const times = task.times.map((time: any) => time.total);
    task.total = times.reduce((acc, val) => acc + val);
    await task.save();
    res.send(time);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/api/time/:id', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const time: ITimeDoc | null = await Time.findById(reqAuth.params.id);
    if (!time) throw new Error('Time not found');
    if (time && !time.end) throw new Error('Timer is not stopped');

    await time.remove();

    res.send({message: 'Time removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
