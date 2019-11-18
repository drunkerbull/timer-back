import jwt from 'jsonwebtoken';
import User, {IUserDoc} from '../models/User';
import {NextFunction, Request, Response} from 'express';
import ErrorHandling from '../error-handling';

export interface RequestAuth<T = null> extends Request {
  user: IUserDoc;
  body: T
}

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const reqAuth = req as RequestAuth;
  try {
    const token = req.header('Authorization');
    if (!token) {
      throw new Error('Not found JWT token');
    }

    const formattedToken: string = token.replace('Bearer ', '');

    const decoded: any = jwt.verify(formattedToken, 'thisissecret');

    const user: IUserDoc | null = await User.findOne(
      {_id: decoded._id, 'tokens.token': formattedToken});

    if (!user) {
      throw new Error('Not found User');
    }
    if (user.currentTimer) {
      await user.populate('currentTimer').execPopulate();
    }
    reqAuth.user = user;
    next();
  } catch (e) {
    ErrorHandling(e, res, 401);
  }
};
export default auth;
