import mongoose, {Document, Model, model, Schema} from 'mongoose';
import {ITaskDoc} from './Task';

export interface IProject {
  _id: string,
  __v: number,
  name: string,
  owner: string,
  workers: string[];
  tasks: ITaskDoc[]
}

export interface IProjectDoc extends Document, IProject {
  _id: string,
  __v: number,
}

const ProjectSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  workers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]
}, {
  timestamps: true
});

ProjectSchema.virtual('tasks', {
  ref: 'Task',
  localField: '_id',
  foreignField: 'project'
});

ProjectSchema.statics.findByCredentials = async (params: any): Promise<IProjectDoc | null> => {
  const project: IProjectDoc | null = await Project.findOne(params);
  if (!project) {
    return null;
  }
  return project;
};

export interface IProjectModel extends Model<IProjectDoc> {
  findByCredentials(params: any): Promise<IProjectDoc>
}

const Project: IProjectModel = model<IProjectDoc, IProjectModel>('Project', ProjectSchema);
export default Project;
