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
  project: IProjectDoc | null,
  token: string
}

describe('PROJECTS', () => {
  const bank: ITestProject = {user: null, project: null, token: ''};

  it('should register and login user OK', async (done) => {
    const packUser = {
      name: 'testProjectOK',
      pass: 'testpassProjectOK'
    };

    const resRegister = await request(app).post('/register')
      .send(packUser);
    const resLogin = await request(app).post('/login')
      .send(packUser);
    expect(resLogin.body.user.name).toBe(packUser.name);
    bank.user = resLogin.body.user;
    bank.token = resLogin.body.token;
    done();
  });
  it('should create project OK', async (done) => {
    const pack = {
      name: 'testProjectOK'
    };
    const resProjectCreate = await request(app).post('/projects')
      .set('Authorization', 'Bearer ' + bank.token).send(pack);
    expect(resProjectCreate.body.name).toBe(pack.name);
    bank.project = resProjectCreate.body;
    done();
  });
  it('should get project OK', async (done) => {
    const resProjectGet = await request(app).get('/projects/' + bank.project!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGet.body.name).toBe(bank.project!.name);
    done();
  });
  it('should get all projects OK', async (done) => {
    const resProjectGetAll = await request(app).get('/projects')
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGetAll.body.length).toBeGreaterThanOrEqual(1);
    expect(resProjectGetAll.body[0].name).toBe(bank.project!.name);
    done();
  });

  it('should get all tasks in project OK', async (done) => {
    const resProjectGetAllTasks = await request(app).get('/projects/' + bank.project!._id + '/tasks')
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGetAllTasks.body.length).toBeGreaterThanOrEqual(0);
    done();
  });

  it('should put project OK', async (done) => {
    const packUpdateProject = {
      name: 'testOKprojectsAfterPUT'
    };
    const resProjectUpdate = await request(app).put('/projects/' + bank.project!._id)
      .send(packUpdateProject).set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectUpdate.body.name).toBe(packUpdateProject.name);
    bank.project = resProjectUpdate.body;
    done();
  });
  it('should add worker to project OK', async (done) => {
    const packUserAdd = {
      name: 'testOKTestAddWorker',
      pass: 'testpassOKTestAddWorker'
    };
    const resProjectAddWorkerCreatedUser = await request(app).post('/register')
      .send(packUserAdd);

    const resProjectAddedWorker = await request(app).post('/projects/' + bank.project!._id + '/worker')
      .send(resProjectAddWorkerCreatedUser.body).set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectAddedWorker.body.message).toBe('Worker added to project');
    done();
  });
  it('should delete worker to project OK', async (done) => {
    const packUserDelete = {
      name: 'testOKTestAddWorker'
    };
    const resProjectDeleteWorker = await request(app).delete('/projects/' + bank.project!._id + '/worker')
      .send(packUserDelete).set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectDeleteWorker.body.message).toBe('Worker deleted from project');
    done();
  });
  it('should delete project OK', async (done) => {
    const resProjectDelete = await request(app).delete('/projects/' + bank.project!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectDelete.body.message).toBe('Project removed');
    done();
  });
});
