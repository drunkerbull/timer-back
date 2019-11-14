import {Request, Response, Router} from 'express';
import User, {IUser, IUserDoc} from '../models/User';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';
import multer from 'multer';
import sharp from 'sharp';
import Task, {ITaskDoc} from '../models/Task';

const router = Router();

router.get('/api/users', async (req: Request, res: Response) => {
  try {
    const user: IUserDoc[] = await User.find({});
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/users/me', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    res.send(reqAuth.user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/api/users/me', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<IUser>;
  const updates = Object.keys(reqAuth.body);
  const allowedUpdates = ['name', 'surname', 'nickname', 'haveAvatar'];
  const isValidOperation = updates.every((update: string) => allowedUpdates.includes(update));
  try {
    if (!isValidOperation) throw new Error('Invalid data');

    Object.assign(reqAuth.user, reqAuth.body);
    await reqAuth.user.save();

    res.send(reqAuth.user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

router.post('/api/users/me/timer', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<ITaskDoc>;
  try {
    const task: ITaskDoc | null = await Task.findById(reqAuth.body._id);
    reqAuth.user.currentTimer = task!.timerStarted ? task!._id : null;
    if (reqAuth.user.currentTimer) {
      await reqAuth.user.populate('currentTimer').execPopulate();
    }
    await reqAuth.user.save();
    res.send(reqAuth.user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/api/users/me/pass', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<any>;
  const updates = Object.keys(reqAuth.body);
  const allowedUpdates = ['currentPass', 'newPass', 'repeatNewPass'];
  const isValidOperation = updates.every((update: string) => allowedUpdates.includes(update));
  try {
    if (!isValidOperation) throw new Error('Invalid data');
    if (reqAuth.body.newPass !== reqAuth.body.repeatNewPass) throw new Error('Passwords do not match. New and Repeat');

    await reqAuth.user.checkPass(reqAuth.body.currentPass);
    reqAuth.user.pass = reqAuth.body.newPass;
    await reqAuth.user.save();

    res.send(reqAuth.user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

router.delete('/api/users/me', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<IUser>;
  try {
    await reqAuth.user.remove();
    res.send({message: 'User removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});


const uploadAvatar = multer({
  dest: 'src/uploads/avatars',
  limits: {
    fileSize: 1048576
  }
});
router.post('/api/users/me/avatar', auth, uploadAvatar.single('avatar'), async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<IUserDoc>;
  try {
    const buffer = await sharp(req.file.path).resize(300, 300).png().toBuffer();
    reqAuth.user.avatar = buffer;
    await reqAuth.user.save();
    if (reqAuth.user.currentTimer) {
      await reqAuth.user.populate('currentTimer').execPopulate();
    }
    res.send();
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/users/:id/avatar', async (req: Request, res: Response) => {
  try {
    const user = await User.findUserById(req.params.id);

    if (!user.avatar) {
      throw new Error('Not have avatar');
    }

    res.set('Content-Type', 'image/png');
    res.send(user.avatar);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
