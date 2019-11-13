import {Request, Response, Router} from 'express';
import User, {IUser, IUserDoc} from '../models/User';
import ErrorHandling from '../error-handling';
import auth, {RequestAuth} from '../middleware/auth';
import multer from 'multer';
import sharp from 'sharp';

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
    const user: IUserDoc = await User.findUserById(reqAuth.user._id);
    res.send(user);
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

    const user: IUserDoc = await User.findUserById(reqAuth.user._id);
    Object.assign(user, reqAuth.body);
    await user.save();

    res.send(user);
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

    const user: IUserDoc = await User.findUserById(reqAuth.user._id);
    await user.checkPass(reqAuth.body.currentPass);
    user.pass = reqAuth.body.newPass;
    await user.save();

    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

router.delete('/api/users/me', auth, async (req: Request, res: Response) => {
  const reqAuth = req as RequestAuth<IUser>;
  try {
    const user: IUserDoc = await User.findUserById(reqAuth.user._id);
    await user.remove();
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
    res.send();
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/users/:id/avatar',  async (req: Request, res: Response) => {
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
