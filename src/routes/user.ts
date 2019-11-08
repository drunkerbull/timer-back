import {Request, Response, Router} from 'express';
import User, {IUserDoc} from '../models/User';
import ErrorHandling from '../error-handling';
import paramMongoId from '../middleware/paramMongoId';
import auth from '../middleware/auth';

const router = Router();


router.get('/api/users', async (req: Request, res: Response) => {
  try {
    const user: IUserDoc[] = await User.find({});
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.get('/api/users/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  try {
    const user: IUserDoc = await User.findUserById(req.params.id);
    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.put('/api/users/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  try {
    const user: IUserDoc = await User.findUserById(req.params.id);

    Object.assign(user, req.body);
    await user.save();

    res.send(user);
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
router.delete('/api/users/:id', auth, paramMongoId, async (req: Request, res: Response) => {
  try {
    const user: IUserDoc = await User.findUserById(req.params.id);
    await user.remove();
    res.send({message: 'User removed'});
  } catch (e) {
    ErrorHandling(e, res, 400);
  }
});
export default router;
