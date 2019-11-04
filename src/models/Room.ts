import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface IRoom {
  name: string
}

export interface IRoomDoc extends Document, IRoom {
  _id: string,
  __v: number,
  owner: string,
  group: string[],
  messages: {
    type: string,
    text: string
  }[]
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
    type: {type: String},
    text: {type: String}
  }]
}, {
  timestamps: true
});

export interface IRoomModel extends Model<IRoomDoc> {
}

const Room: IRoomModel = model<IRoomDoc, IRoomModel>('Room', RoomSchema);
export default Room;
