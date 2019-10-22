import request from 'supertest';
import app from '../src/app';
import DB from '../src/db/mongoose';
import {IProjectDoc} from '../src/models/Project';
import {IUserDoc} from '../src/models/User';
import {ITaskDoc} from '../src/models/Task';

beforeAll(() => {
  DB.currentMongoose.connection.on('connected', () => {
    DB.currentMongoose.connection.db.dropDatabase();
  });
});

interface ITestTask {
  project: IProjectDoc | null,
  user: IUserDoc | null,
  task: ITaskDoc | null,
  token: string
}

describe('TASKS', () => {
  const bank: ITestTask = {project: null, user: null, task: null, token: ''};
  it('should register and login and create project OK', async (done) => {
    const packUser = {
      name: 'testTaskOK',
      pass: 'testpassTaskOK'
    };
    const packCreateProject = {
      name: 'testProjectTaskOK'
    };
    const resRegister = await request(app).post('/register').send(packUser);
    expect(resRegister.body.name).toBe(packUser.name);

    const resLogin = await request(app).post('/login').send(packUser);
    expect(resLogin.body.user.name).toBe(packUser.name);
    bank.token = resLogin.body.token;
    bank.user = resLogin.body.user;

    const resProjectCreate = await request(app).post('/projects')
      .set('Authorization', 'Bearer ' + bank.token).send(packCreateProject);
    expect(resProjectCreate.body.name).toBe(packCreateProject.name);
    bank.project = resProjectCreate.body;
    done();
  });

  it('should create task OK', async (done) => {
    const pack = {
      name: 'testTaskOKCreate',
      project: bank.project!._id
    };
    const resTaskCreate = await request(app).post('/tasks')
      .send(pack).set('Authorization', 'Bearer ' + bank.token);
    expect(resTaskCreate.body.name).toBe(pack.name);
    bank.task = resTaskCreate.body;
    done();
  });
  it('should get all tasks OK', async (done) => {
    const resProjectGetTasks = await request(app).get('/tasks')
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGetTasks.body.length).toBeGreaterThanOrEqual(1);
    expect(resProjectGetTasks.body[0]).toEqual(bank.task);
    done();
  });
  it('should get task OK', async (done) => {
    const resTaskGet = await request(app).get('/tasks/' + bank.task!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resTaskGet.body).toEqual(bank.task!);
    done();
  });
  it('should post timer in task OK', async (done) => {
    const packTimer = {
      start: '12:00',
      end: '12:20',
      owner: bank.user!._id
    };
    const resTimerPost = await request(app).post('/tasks/' + bank.task!._id + '/timer')
      .set('Authorization', 'Bearer ' + bank.token).send(packTimer);
    expect(resTimerPost.body.timers[0].start).toBe(packTimer.start);
    done();
  });
  it('should put timer in task OK', async (done) => {
    const packTimerUpdate = {
      start: '14:44',
      end: '16:23',
      index: 0
    };
    const resTimerUpdate = await request(app).put('/tasks/' + bank.task!._id + '/timer')
      .set('Authorization', 'Bearer ' + bank.token).send(packTimerUpdate);
    expect(resTimerUpdate.body.timers[0].start).toBe(packTimerUpdate.start);
    done();
  });
  it('should delete timer in task OK', async (done) => {
    const packTimerDelete = {
      index: 0
    };
    const resTimerDelete = await request(app).delete('/tasks/' + bank.task!._id + '/timer')
      .set('Authorization', 'Bearer ' + bank.token).send(packTimerDelete);
    expect(resTimerDelete.body.message).toBe('Timer removed');
    done();
  });
  it('should put task OK', async (done) => {
    const packUpdateTask = {
      name: 'testTaskOKUpdated'
    };
    const resTaskCreate = await request(app).put('/tasks/' + bank.task!._id)
      .set('Authorization', 'Bearer ' + bank.token).send(packUpdateTask);
    expect(resTaskCreate.body.name).toBe(packUpdateTask.name);
    bank.task = resTaskCreate.body;
    done();
  });
  it('should delete task OK', async (done) => {
    const resProjectGetTasks = await request(app).delete('/tasks/' + bank.task!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGetTasks.body.message).toBe('Task removed');
    done();
  });
});
