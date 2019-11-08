import mongoose, {Document, Model, model, Schema} from 'mongoose';
import {IUserDoc} from './User';

export interface IRoom {
  name: string
}

export interface IRoomDoc extends Document, IRoom {
  _id: mongoose.Schema.Types.ObjectId,
  __v: number,
  owner: mongoose.Schema.Types.ObjectId,
  group: IUserDoc[],
  read: mongoose.Schema.Types.ObjectId[],
  messages: mongoose.Schema.Types.ObjectId[]
}

const RoomSchema: Schema = new mongoose.Schema({
  name: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  group: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  messages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message'
  }],
  read: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

export interface IRoomModel extends Model<IRoomDoc> {
}

const Room: IRoomModel = model<IRoomDoc, IRoomModel>('Room', RoomSchema);
export default Room;

