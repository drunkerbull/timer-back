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
    const pack = {
      name: 'testOKUsers',
      pass: 'testpassOKUsers'
    };
    const resUserCreate = await request(app)
      .post('/register')
      .send(pack);
    expect(resUserCreate.body.name).toBe(pack.name);
    expect(resUserCreate.body.pass).toBe(pack.pass);
    bank.user = resUserCreate.body;
    done();
  });
  it('should get all users OK', async (done) => {
    const resUsersGet = await request(app).get('/users');
    expect(resUsersGet.body.length).toBeGreaterThanOrEqual(1);
    expect(resUsersGet.body[0]).toEqual(bank.user);
    done();
  });
  it('should get user OK', async (done) => {
    const resUserGet = await request(app).get('/users/' + bank.user!._id);
    expect(resUserGet.body).toEqual(bank.user);
    done();
  });
  it('should put user OK', async (done) => {
    const packUser = {
      name: 'testOKUsersAfterPUT',
      pass: 'testpassOKUsersAfterPUT'
    };
    const resUserUpdate = await request(app).put('/users/' + bank.user!._id)
      .send(packUser);
    expect(resUserUpdate.body.name).toBe(packUser.name);
    expect(resUserUpdate.body.pass).toBe(packUser.pass);
    bank.user = resUserUpdate.body;
    done();
  });
  it('should delete user OK', async (done) => {
    const resUserDelete = await request(app).delete('/users/' + bank.user!._id);
    expect(resUserDelete.body.message).toBe('User removed');
    done();
  });
});
