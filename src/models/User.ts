import mongoose, {Document, Model, model, Schema} from 'mongoose';
import jwt from 'jsonwebtoken';

export interface IUser {
  _id: string,
  __v: number,
  name: string,
  pass: string,
  tokens: {
    token: string
  }[],
}

export interface IUserDoc extends Document, IUser {
  _id: string,
  __v: number,

  generateAuthToken(): string;
}

const UserSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
}, {
  timestamps: true
});
UserSchema.methods.generateAuthToken = async function (): Promise<string> {
  const user = this;
  const token = jwt.sign({_id: user._id.toString()}, 'thisissecret');
  user.tokens = user.tokens.concat({token});
  await user.save();
  return token;
};

UserSchema.statics.findByCredentials = async (params: any): Promise<IUserDoc | null> => {
  const user: IUserDoc | null = await User.findOne(params);
  if (!user) {
    return null;
  }
  return user;
};

export interface IUserModel extends Model<IUserDoc> {
  findByCredentials(params: any): Promise<IUserDoc>
}

const User: IUserModel = model<IUserDoc, IUserModel>('User', UserSchema);
export default User;
