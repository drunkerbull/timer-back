import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface IMessage {
  type: string,
  text: string,
  owner: string,
  room: string,

}

export interface IMessageDoc extends Document, IMessage {
  _id: string,
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
    type: String
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

