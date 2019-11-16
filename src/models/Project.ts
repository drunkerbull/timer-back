import mongoose, {Document, Model, model, Schema} from 'mongoose';
import {ITaskDoc} from './Task';
import {RequestAuth} from '../middleware/auth';
import {IProjectWorker} from '../routes/project';

export interface IProject {
  name: string
}

export interface IProjectDoc extends Document, IProject {
  _id: mongoose.Schema.Types.ObjectId,
  __v: number,
  owner: mongoose.Schema.Types.ObjectId,
  workers: mongoose.Schema.Types.ObjectId[],
  tasks: ITaskDoc[]
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
  }],
  tasks:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
}, {
  timestamps: true
});

ProjectSchema.statics.findByCredentials = async (params: any): Promise<IProjectDoc | null> => {
  const project: IProjectDoc | null = await Project.findOne(params);
  if (!project) {
    return null;
  }
  return project;
};
ProjectSchema.statics.findProjectById = async (reqPack: RequestAuth<IProjectWorker>): Promise<IProjectDoc> => {
  const project: IProjectDoc | null = await Project.findById(reqPack.params.id);
  if (!project) throw new Error('Project not found');
  if (project.owner.toString() !== reqPack.user._id.toString()) throw new Error('You are not owner of project');
  return project;
};

export interface IProjectModel extends Model<IProjectDoc> {
  findByCredentials(params: any): Promise<IProjectDoc>

  findProjectById(reqPack: any): Promise<IProjectDoc>
}

const Project: IProjectModel = model<IProjectDoc, IProjectModel>('Project', ProjectSchema);
export default Project;
