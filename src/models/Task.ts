import mongoose, {Document, Model, model, Schema} from 'mongoose';

export interface ITask {
  _id: string,
  __v: number,
  name: string,
  owner: string,
  project: string,
  timers: {
    start: string,
    end: string,
    owner: string
  }[]
}

export interface ITaskDoc extends Document, ITask {
  _id: string,
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
  project: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Project'
  },
  timers: [{
    start: {
      type: String
    },
    end: {
      type: String
    },
    owner: {
      type: String
    }
  }]
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
