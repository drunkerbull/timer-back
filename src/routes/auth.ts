import {Request, Response, Router} from 'express';
import User, {IUserDoc} from '../models/User';
import ErrorHandling from '../error-handling';

const router = Router();

export interface IAuthLogin {
  email: string,
  pass: string
}

export interface IAuthRegister {
  email: string,
  nickname: string,
  pass: string
}

router.post('/api/login', async (req: Request, res: Response) => {
  const reqPack = req.body as IAuthLogin;
  try {
    if (!reqPack.email || !reqPack.pass) throw new Error('add all info');

    const user: IUserDoc | null = await User.findByCredentials(reqPack);
    if (!user) throw new Error('User not found');
    user.populate('currentTimer').execPopulate();
    const token: string = await user.generateAuthToken();
    res.send({user, token});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.post('/api/register', async (req: Request, res: Response) => {
  const reqPack = req.body as IAuthRegister;
  try {
    if (!reqPack.email || !reqPack.nickname || !reqPack.pass) throw new Error('add all info');
    reqPack.email.toLowerCase();
    reqPack.nickname.trim();
    const user: IUserDoc | null = await User.findByCredentials(reqPack);
    if (user) throw new Error('User exist');
    if (user && user!.nickname === reqPack.nickname) throw new Error('User exist');
    const newUser: IUserDoc = new User(reqPack);
    await newUser.save();
    res.send(newUser);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

export default router;
