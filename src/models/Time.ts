import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface ITime {
  task?: mongoose.Schema.Types.ObjectId,
  start: string,
  end: string
}

export interface ITimeDoc extends Document, ITime {
  _id: mongoose.Schema.Types.ObjectId,
  owner: mongoose.Schema.Types.ObjectId,
  total: number,
  __v: number
}

const TimeSchema: Schema = new mongoose.Schema({
  task: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  start: {
    type: String,
    required: true
  },
  total: {
    type: Number,
    default: 0
  },
  end: {
    type: String,
    default: null
  }
}, {
  timestamps: true
});


export interface ITimeModel extends Model<ITimeDoc> {

}

const Time: ITimeModel = model<ITimeDoc, ITimeModel>('Time', TimeSchema);
export default Time;
