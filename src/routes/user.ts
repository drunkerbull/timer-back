import {Request, Response, Router} from 'express';
import User, {IUser, IUserDoc} from '../models/User';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';
import multer from 'multer';
import sharp from 'sharp';
import Task, {ITaskDoc} from '../models/Task';
import mongoose from 'mongoose';

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
  const allowedUpdates = ['name', 'surname', 'nickname', 'haveAvatar',
    'blockEveryoneWhoWantAddMeToProject', 'blockEveryoneWhoWantWriteMe', 'disableNotifications', 'disableNotifications'];
  const isValidOperation = updates.every((update: string) => allowedUpdates.includes(update));
  try {
    if (!isValidOperation) throw new Error('Invalid data');
    if (reqAuth.body.nickname) {
      const user: IUserDoc | null = await User.findOne({nickname: reqAuth.body.nickname});
      if (user) throw new Error('User with this  nickname exist');
    }
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


router.get('/api/blacklist', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    await reqAuth.user.populate('blackList').execPopulate();
    res.send(reqAuth.user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.post('/api/blacklist', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<{ nickname: string }>;
  try {
    const user: IUserDoc | null = await User.findOne({nickname: reqAuth.body.nickname});
    if (!user) throw new Error('Not found User');
    if (user && user._id.toString() === reqAuth.user._id.toString()) throw new Error('You cannot blacklist yourself');

    const userExist = reqAuth.user.checkBlackList(user._id);
    if (!userExist) throw new Error('This user is always in blackList');

    reqAuth.user.blackList.push(user._id);
    await reqAuth.user.save();

    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/api/blacklist/:id', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth;
  try {
    const index = reqAuth.user.checkBlackList(reqAuth.params.id);

    reqAuth.user.blackList.splice(index, 1);
    await reqAuth.user.save();

    res.send({message: 'User removed from black list'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
