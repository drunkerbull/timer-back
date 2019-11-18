import jwt from 'jsonwebtoken';
import User, {IUserDoc} from '../models/User';

const authSocket = async (socket: any, next: any) => {
  try {
    const token = socket.handshake.query ? socket.handshake.query.token : null;
    if (!token) {
      throw new Error('Not found Token');
    }
    const decoded: any = jwt.verify(token, 'thisissecret');
    const user: IUserDoc | null = await User.findOne({_id: decoded._id, 'tokens.token': token});
    if (!user) {
      throw new Error('Not found User');
    }
    socket.user = user;
    user.online = socket.id;
    await user.save();
    next();
  } catch (e) {
    next(e);
  }
};
export default authSocket;
