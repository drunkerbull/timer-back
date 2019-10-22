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
      name: 'testOK',
      pass: 'testpassOK'
    };
    const resRegister = await request(app)
      .post('/register')
      .send(pack);
    expect(resRegister.body.name).toBe(pack.name);
    expect(resRegister.body.pass).toBe(pack.pass);
    done();
  });
  it('should register user exist NOT OK', async (done) => {
    const pack = {
      name: 'testOK',
      pass: 'testpassOK'
    };
    const resRegisterExist = await request(app)
      .post('/register')
      .send(pack);
    expect(resRegisterExist.status).toBe(400);
    expect(resRegisterExist.body).toEqual({error: 'Error: User exist'});
    done();
  });
  it('should register user send not all data NOT OK', async (done) => {
    const pack = {};
    const resRegisterNotAllData = await request(app)
      .post('/register')
      .send(pack);
    expect(resRegisterNotAllData.status).toBe(400);
    expect(resRegisterNotAllData.body).toEqual({error: 'Error: add all info'});
    done();
  });
  it('should login user OK', async (done) => {
    const pack = {
      name: 'testOK',
      pass: 'testpassOK'
    };
    const resLogin = await request(app)
      .post('/login')
      .send(pack);
    expect(resLogin.body.user.name).toBe(pack.name);
    done();
  });
});

