import mongoose, {Document, Model, model, Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'validator';

export interface IUser {
  email: string,
  nickname: string,
  pass: string,
  online: string,
  avatar?: any,
  haveAvatar: boolean,
  currentTimer: mongoose.Schema.Types.ObjectId | null
}

export interface IUserDoc extends Document, IUser {
  _id: mongoose.Schema.Types.ObjectId,
  __v: number,
  name: string,
  surname: string,
  blackList: mongoose.Schema.Types.ObjectId[],
  blockEveryoneWhoWantAddMeToProject: boolean,
  blockEveryoneWhoWantWriteMe: boolean,
  disableNotifications: boolean,
  tokens: {
    token: string
  }[]

  checkPass(pass: string): boolean;

  checkBlackList(id: mongoose.Schema.Types.ObjectId | string): number;

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
  name: {
    type: String,
    default: '',
  },
  surname: {
    type: String,
    default: '',
  },
  pass: {
    type: String,
    required: true,
    minlength: 8
  },
  online: {
    type: String,
    default: null
  },
  currentTimer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Time'
  },
  haveAvatar: {
    type: Boolean,
    default: false
  },
  blockEveryoneWhoWantAddMeToProject: {
    type: Boolean,
    default: false
  },
  blockEveryoneWhoWantWriteMe: {
    type: Boolean,
    default: false
  },
  disableNotifications: {
    type: Boolean,
    default: false
  },
  blackList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  avatar: {
    type: Buffer
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
UserSchema.methods.checkPass = async function (currentPass: string) {
  const user = this;
  const userObject = user.toObject();
  const isMatch = await bcrypt.compare(currentPass, userObject.pass);
  if (!isMatch) {
    throw new Error('Invalid password data');
  }
  return isMatch;
};
UserSchema.methods.checkBlackList =  function (id: mongoose.Schema.Types.ObjectId | string) {
  return this.blackList.findIndex((_id: mongoose.Schema.Types.ObjectId) => _id.toString() === id.toString());
};
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.pass;
  delete userObject.tokens;
  delete userObject.avatar;

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
UserSchema.statics.findUserById = async (id: mongoose.Schema.Types.ObjectId | string): Promise<IUserDoc> => {
  const user: IUserDoc | null = await User.findById(id);
  if (!user) throw new Error('User not found');
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


  findUserById(id: mongoose.Schema.Types.ObjectId | string): Promise<IUserDoc>
}

const User: IUserModel = model<IUserDoc, IUserModel>('User', UserSchema);
export default User;
