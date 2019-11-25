import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface ITask {
  name: string,
  worker: string,
  project: string,
  total: number,

}

export interface ITaskDoc extends Document, ITask {
  _id: mongoose.Schema.Types.ObjectId,
  owner: mongoose.Schema.Types.ObjectId,
  times: mongoose.Schema.Types.ObjectId[],
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
  times: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Time'
  }],
  total: {
    type: Number,
    default: 0
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
TaskSchema.statics.findTaskById = async (reqAuth: any): Promise<ITaskDoc> => {
  const task: ITaskDoc | null = await Task.findById(reqAuth.params.id);
  if (!task) throw new Error('Task not found');
  if (task.owner.toString() !== reqAuth.user._id.toString()
    && task.worker.toString() !== reqAuth.user._id.toString()) {
    throw new Error('You are not working in this task');
  }
  return task;
};

export interface ITaskModel extends Model<ITaskDoc> {
  findByCredentials(params: any): Promise<ITaskDoc>

  findTaskById(reqAuth: any): Promise<ITaskDoc>

}

const Task: ITaskModel = model<ITaskDoc, ITaskModel>('Task', TaskSchema);
export default Task;
