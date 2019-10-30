import request from 'supertest';
import app from '../src/app';
import DB from '../src/db/mongoose';
import {IProjectDoc} from '../src/models/Project';
import {IUserDoc} from '../src/models/User';
import {ITaskDoc} from '../src/models/Task';
import moment from 'moment';

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
      email: 'testTaskOK@gmail.com',
      nickname: 'testTasknickname',
      pass: '122333Qwe'
    };
    const packUserLogin = {
      email: 'testTaskOK@gmail.com',
      pass: '122333Qwe'
    };
    const packCreateProject = {
      name: 'testProjectTaskOK'
    };
    const resRegister = await request(app).post('/api/register').send(packUser);
    expect(resRegister.body.email).toBe(packUser.email);

    const resLogin = await request(app).post('/api/login').send(packUserLogin);
    expect(resLogin.body.user.nickname).toBe(packUser.nickname);
    expect(resLogin.body.user.email).toBe(packUser.email);
    bank.token = resLogin.body.token;
    bank.user = resLogin.body.user;

    const resProjectCreate = await request(app).post('/api/projects')
      .set('Authorization', 'Bearer ' + bank.token).send(packCreateProject);
    expect(resProjectCreate.body.name).toBe(packCreateProject.name);
    bank.project = resProjectCreate.body;
    done();
  });

  it('should create task OK', async (done) => {
    const pack = {
      name: 'testTaskOKCreate',
      project: bank.project!._id,
      worker: bank.user!._id
    };
    const resTaskCreate = await request(app).post('/api/tasks')
      .send(pack).set('Authorization', 'Bearer ' + bank.token);
    expect(resTaskCreate.body.name).toBe(pack.name);
    bank.task = resTaskCreate.body;
    done();
  });


  it('should put task START TIMER OK', async (done) => {
    const packUpdateTask = {
      timerStarted: moment().format()
    };
    const resTaskTimerStart = await request(app).put('/api/tasks/' + bank.task!._id)
      .set('Authorization', 'Bearer ' + bank.token).send(packUpdateTask);
    expect(resTaskTimerStart.body.timerStarted).toBe(packUpdateTask.timerStarted);
    done();
  });
  it('should put task STOP TIMER OK', async (done) => {
    const packUpdateTask = {
      timerStarted: '',
      total: 100
    };
    const resTaskTimerStop = await request(app).put('/api/tasks/' + bank.task!._id)
      .set('Authorization', 'Bearer ' + bank.token).send(packUpdateTask);
    expect(resTaskTimerStop.body.timerStarted).toBe(packUpdateTask.timerStarted);
    expect(resTaskTimerStop.body.total).toBe(packUpdateTask.total);
    done();
  });
  it('should delete task OK', async (done) => {
    const resProjectGetTasks = await request(app).delete('/api/tasks/' + bank.task!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resProjectGetTasks.body.message).toBe('Task removed');
    done();
  });
});
