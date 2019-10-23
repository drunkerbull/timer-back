import {NextFunction, Request, Response, Router} from 'express';
import User, {IUserDoc} from '../models/User';
import ErrorHandling from '../error-handling';

const router = Router();
router.post('/login', async (req: Request, res: Response) => {
  try {
    if (!req.body.email || !req.body.pass) {
      throw new Error('add all info');
    }
    const user: IUserDoc | null = await User.findByCredentials(req.body);
    if (!user) {
      throw new Error('User not found');
    }
    const token: string = await user.generateAuthToken();
    res.send({user, token});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.post('/register', async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.body.email || !req.body.nickname || !req.body.pass) {
      throw new Error('add all info');
    }
    const userCheck: IUserDoc | null = await User.findByCredentials(req.body);
    if (userCheck) {
      throw new Error('User exist');
    }
    const user: IUserDoc = new User(req.body);
    await user.save();
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});

export default router;
