import {NextFunction, Request, Response, Router} from 'express';
import User, {IUserDoc} from '../models/User';
import ErrorHandling from '../error-handling';

const router = Router();

router.get('/api/users', async (req: Request, res: Response) => {
  try {
    const user: IUserDoc[] = await User.find({});
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/users/:id', async (req: Request, res: Response) => {
  try {

    const user: IUserDoc | null = await User.findById(req.params.id);
    if (!user) {
      throw new Error('User not found');
    }
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/api/users/:id', async (req: Request, res: Response) => {
  try {
    const user: IUserDoc | null = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!user) {
      throw new Error('User not found');
    }
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/api/users/:id', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: IUserDoc | null = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      throw new Error('User not found');
    }
    res.send({message: 'User removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
