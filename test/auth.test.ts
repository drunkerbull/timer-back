import request from 'supertest';
import app from '../src/app';
import DB from '../src/db/mongoose';

beforeAll(() => {
  DB.currentMongoose.connection.on('connected', () => {
    DB.currentMongoose.connection.db.dropDatabase();
  });
});

describe('AUTH', () => {
  it('should register user OK', async (done) => {
    const pack = {
      email: 'testOK@gmail.com',
      nickname: 'nickname',
      pass: '122333Qwe'
    };
    const resRegister = await request(app)
      .post('/api/register')
      .send(pack);
    expect(resRegister.body.email).toBe(pack.email);
    done();
  });
  it('should register user exist NOT OK', async (done) => {
    const pack = {
      email: 'testOK@gmail.com',
      nickname: 'nickname',
      pass: '122333Qwe'
    };
    const resRegisterExist = await request(app)
      .post('/api/register')
      .send(pack);
    expect(resRegisterExist.status).toBe(400);
    expect(resRegisterExist.body).toEqual({body: 'Error: User exist'});
    done();
  });
  it('should register user send not all data NOT OK', async (done) => {
    const pack = {};
    const resRegisterNotAllData = await request(app)
      .post('/api/register')
      .send(pack);
    expect(resRegisterNotAllData.status).toBe(400);
    expect(resRegisterNotAllData.body).toEqual({body: 'Error: add all info'});
    done();
  });
  it('should login user OK', async (done) => {
    const pack = {
      email: 'testOK@gmail.com',
      pass: '122333Qwe'
    };
    const resLogin = await request(app)
      .post('/api/login')
      .send(pack);
    expect(resLogin.body.user.email).toBe(pack.email);
    done();
  });
});

