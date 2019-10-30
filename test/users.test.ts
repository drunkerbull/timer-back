import {IUserDoc} from '../src/models/User';
import request from 'supertest';
import app from '../src/app';
import DB from '../src/db/mongoose';

beforeAll(() => {
  DB.currentMongoose.connection.on('connected', () => {
    DB.currentMongoose.connection.db.dropDatabase();
  });
});

interface ITestUser {
  user: IUserDoc | null,
  token: string
}

describe('USERS', () => {
  let bank: ITestUser = {user: null, token: ''};

  it('should create user OK', async (done) => {
    const packUser = {
      email: 'testUsersOK@gmail.com',
      nickname: 'testUsersnickname',
      pass: 'testpassUsersOK'
    };
    const packUserLogin = {
      email: 'testUsersOK@gmail.com',
      pass: 'testpassUsersOK'
    };
    const resUserCreate = await request(app)
      .post('/api/register')
      .send(packUser);
    expect(resUserCreate.body.email).toBe(packUser.email);
    const resLogin = await request(app).post('/api/login')
      .send(packUserLogin);
    expect(resLogin.body.user.email).toBe(resUserCreate.body.email);
    bank.user = resLogin.body.user;
    bank.token = resLogin.body.token;
    done();
  });
  it('should get all users OK', async (done) => {
    const resUsersGet = await request(app).get('/api/users');
    expect(resUsersGet.body.length).toBeGreaterThanOrEqual(1);
    expect(resUsersGet.body[0]).toEqual(bank.user);
    done();
  });
  it('should get user OK', async (done) => {
    const resUserGet = await request(app).get('/api/users/' + bank.user!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resUserGet.body).toEqual(bank.user);
    done();
  });
  it('should put user OK', async (done) => {
    const packUser = {
      email: 'testOKUsersAfterPUT@gmail.com',
      pass: 'testpassOKUsersAfterPUT'
    };
    const resUserUpdate = await request(app).put('/api/users/' + bank.user!._id)
      .send(packUser).set('Authorization', 'Bearer ' + bank.token);
    expect(resUserUpdate.body.email).toBe(packUser.email);
    bank.user = resUserUpdate.body;
    done();
  });
  it('should delete user OK', async (done) => {
    const resUserDelete = await request(app).delete('/api/users/' + bank.user!._id)
      .set('Authorization', 'Bearer ' + bank.token);
    expect(resUserDelete.body.message).toBe('User removed');
    done();
  });
});
