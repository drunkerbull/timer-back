import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface ITask {
  name: string,
  worker:string,
  project: string,
  total: number,
  timerStarted: string

}

export interface ITaskDoc extends Document, ITask {
  _id: mongoose.Schema.Types.ObjectId,
  owner: mongoose.Schema.Types.ObjectId
  __v: number,
}

const TaskSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  worker: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project'
  },
  total: {
    type: Number,
    default: 0
  },
  timerStarted: {
    type: String,
    default: ''
  }
}, {
  timestamps: true
});

TaskSchema.statics.findByCredentials = async (params: any): Promise<ITaskDoc | null> => {
  const task: ITaskDoc | null = await Task.findOne(params);
  if (!task) {
    return null;
  }
  return task;
};

export interface ITaskModel extends Model<ITaskDoc> {
  findByCredentials(params: any): Promise<ITaskDoc>

}

const Task: ITaskModel = model<ITaskDoc, ITaskModel>('Task', TaskSchema);
export default Task;
