import {IProjectDoc} from '../src/models/Project';
import request from 'supertest';
import app from '../src/app';
import DB from '../src/db/mongoose';
import {IUserDoc} from '../src/models/User';

beforeAll(() => {
  DB.currentMongoose.connection.on('connected', () => {
    DB.currentMongoose.connection.db.dropDatabase();
  });
});

interface ITestProject {
  user: IUserDoc | null,
  worker: IUserDoc | null,
  project: IProjectDoc | null,
  token: string
}

describe('PROJECTS', () => {
  const bank: ITestProject = {user: null, project: null, token: '', worker: null};

  it('should register and login user OK', async (done) => {
    const packUser = {
      email: 'testProjectOK@gmail.com',
      nickname: 'testprojectnickname',
      pass: '122333Qwe'
    };
    const packUserLogin = {
      email: 'testProjectOK@gmail.com',
      pass: '122333Qwe'
    };
    const resRegister = await request(app).post('/api/register')
      .send(packUser);
    const resLogin = await request(app).post('/api/login')
      .send(packUserLogin);
    expect(resLogin.body.user.email).toBe(packUser.email);
    expect(resLogin.body.user.nickname).toBe(packUser.nickname);
    bank.user = resLogin.body.user;
    bank.token = resLogin.body.token;
    done();
  });
  it('should create project OK', async (done) => {
    const pack = {
      name: 'testProjectOK'
    };
    const resProjectCreate = await request(app).post('/api/projects')
      .set('Authorization', 'Bearer ' + bank.token).send(pack);
    expect(resProjectCreate.body.name).toBe(pack.name);
    bank.project = resProjectCreate.body;
    done();
  });
  it('should get project OK', async (done) => {
    const resProjectGet = await request(app).get('/api/projects/' + bank.project!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGet.body.name).toBe(bank.project!.name);
    done();
  });
  it('should get all projects OK', async (done) => {
    const resProjectGetAll = await request(app).get('/api/projects')
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGetAll.body.length).toBeGreaterThanOrEqual(1);
    expect(resProjectGetAll.body[0].name).toBe(bank.project!.name);
    done();
  });

  it('should get all tasks in project OK', async (done) => {
    const resProjectGetAllTasks = await request(app).get('/api/projects/' + bank.project!._id + '/tasks')
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGetAllTasks.body.length).toBeGreaterThanOrEqual(0);
    done();
  });

  it('should put project OK', async (done) => {
    const packUpdateProject = {
      name: 'testOKprojectsAfterPUT'
    };
    const resProjectUpdate = await request(app).put('/api/projects/' + bank.project!._id)
      .send(packUpdateProject).set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectUpdate.body.name).toBe(packUpdateProject.name);
    bank.project = resProjectUpdate.body;
    done();
  });
  it('should add worker to project OK', async (done) => {
    const packUserAdd = {
      email: 'testOKTestAddWorker@gmail.com',
      nickname: 'testoktestaddworkernickname',
      pass: '122333Qwe'
    };
    const resProjectAddWorkerCreatedUser = await request(app).post('/api/register')
      .send(packUserAdd);
    bank.worker = resProjectAddWorkerCreatedUser.body;
    const resProjectAddedWorker = await request(app).post('/api/projects/' + bank.project!._id + '/worker')
      .send(resProjectAddWorkerCreatedUser.body).set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectAddedWorker.body.email).toBe(resProjectAddWorkerCreatedUser.body.email);
    done();
  });
  it('should delete worker to project OK', async (done) => {
    const resProjectDeleteWorker = await request(app).delete('/api/projects/' + bank.project!._id + '/worker/' + bank.worker!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectDeleteWorker.body.message).toBe('Worker deleted from project');
    done();
  });
  it('should delete project OK', async (done) => {
    const resProjectDelete = await request(app).delete('/api/projects/' + bank.project!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectDelete.body.message).toBe('Project removed');
    done();
  });
});
