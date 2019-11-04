import mongoose, {Document, Model, model, Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';

export interface IUser {
  email: string,
  nickname: string,
  pass: string,
}

export interface IUserDoc extends Document, IUser {
  _id: string,
  __v: number,
  tokens: {
    token: string
  }[]
  rooms: string[]

  generateAuthToken(): string;
}

const UserSchema: Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate(value: string) {
      return validator.isEmail(value);
    }
  },
  nickname: {
    type: String,
    required: true,
    minlength: 3
  },
  pass: {
    type: String,
    required: true,
    minlength: 8
  },
  rooms: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  }],
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
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.pass;
  delete userObject.tokens;

  return userObject;
};
UserSchema.statics.findByCredentials = async (params: any): Promise<IUserDoc | null> => {
  if (!validator.isEmail(params.email)) {
    return null;
  }
  const user: IUserDoc | null = await User.findOne({email: params.email});
  if (!user) {
    return null;
  }
  const isMatchPass = await bcrypt.compare(params.pass, user.pass);
  if (!isMatchPass) {
    return null;
  }
  return user;
};

UserSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('pass')) {
    // @ts-ignore
    user.pass = await bcrypt.hash(user.pass, 8);
  }
});

export interface IUserModel extends Model<IUserDoc> {
  findByCredentials(params: any): Promise<IUserDoc>
}

const User: IUserModel = model<IUserDoc, IUserModel>('User', UserSchema);
export default User;
