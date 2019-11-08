import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface IMessage {
  type: string,
  text: string,
  owner: mongoose.Schema.Types.ObjectId,
  room: mongoose.Schema.Types.ObjectId,

}

export interface IMessageDoc extends Document, IMessage {
  _id: mongoose.Schema.Types.ObjectId,
  __v: number,
}

const MessageSchema: Schema = new mongoose.Schema({
  type: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  room:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room'
  },
  text: {
    type: String
  }
}, {
  timestamps: true
});

export interface IMessageModel extends Model<IMessageDoc> {
}

const Message: IMessageModel = model<IMessageDoc, IMessageModel>('Message', MessageSchema);
export default Message;

