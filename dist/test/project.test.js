"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../src/app"));
const mongoose_1 = __importDefault(require("../src/db/mongoose"));
beforeAll(() => {
    mongoose_1.default.currentMongoose.connection.on('connected', () => {
        mongoose_1.default.currentMongoose.connection.db.dropDatabase();
    });
});
describe('PROJECTS', () => {
    const bank = { user: null, project: null, token: '' };
    it('should register and login user OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUser = {
            email: 'testProjectOK',
            nickname: 'testprojectnickname',
            pass: 'testpassProjectOK'
        };
        const packUserLogin = {
            email: 'testProjectOK',
            pass: 'testpassProjectOK'
        };
        const resRegister = yield supertest_1.default(app_1.default).post('/register')
            .send(packUser);
        const resLogin = yield supertest_1.default(app_1.default).post('/login')
            .send(packUserLogin);
        expect(resLogin.body.user.email).toBe(packUser.email);
        expect(resLogin.body.user.nickname).toBe(packUser.nickname);
        bank.user = resLogin.body.user;
        bank.token = resLogin.body.token;
        done();
    }));
    it('should create project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const pack = {
            name: 'testProjectOK'
        };
        const resProjectCreate = yield supertest_1.default(app_1.default).post('/projects')
            .set('Authorization', 'Bearer ' + bank.token).send(pack);
        expect(resProjectCreate.body.name).toBe(pack.name);
        bank.project = resProjectCreate.body;
        done();
    }));
    it('should get project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resProjectGet = yield supertest_1.default(app_1.default).get('/projects/' + bank.project._id)
            .set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectGet.body.name).toBe(bank.project.name);
        done();
    }));
    it('should get all projects OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resProjectGetAll = yield supertest_1.default(app_1.default).get('/projects')
            .set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectGetAll.body.length).toBeGreaterThanOrEqual(1);
        expect(resProjectGetAll.body[0].name).toBe(bank.project.name);
        done();
    }));
    it('should get all tasks in project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resProjectGetAllTasks = yield supertest_1.default(app_1.default).get('/projects/' + bank.project._id + '/tasks')
            .set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectGetAllTasks.body.length).toBeGreaterThanOrEqual(0);
        done();
    }));
    it('should put project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUpdateProject = {
            name: 'testOKprojectsAfterPUT'
        };
        const resProjectUpdate = yield supertest_1.default(app_1.default).put('/projects/' + bank.project._id)
            .send(packUpdateProject).set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectUpdate.body.name).toBe(packUpdateProject.name);
        bank.project = resProjectUpdate.body;
        done();
    }));
    it('should add worker to project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUserAdd = {
            email: 'testOKTestAddWorker',
            nickname: 'testoktestaddworkernickname',
            pass: 'testpassOKTestAddWorker'
        };
        const resProjectAddWorkerCreatedUser = yield supertest_1.default(app_1.default).post('/register')
            .send(packUserAdd);
        const resProjectAddedWorker = yield supertest_1.default(app_1.default).post('/projects/' + bank.project._id + '/worker')
            .send(resProjectAddWorkerCreatedUser.body).set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectAddedWorker.body.message).toBe('Worker added to project');
        done();
    }));
    it('should delete worker to project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUserDelete = {
            email: 'testOKTestAddWorker'
        };
        const resProjectDeleteWorker = yield supertest_1.default(app_1.default).delete('/projects/' + bank.project._id + '/worker')
            .send(packUserDelete).set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectDeleteWorker.body.message).toBe('Worker deleted from project');
        done();
    }));
    it('should delete project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resProjectDelete = yield supertest_1.default(app_1.default).delete('/projects/' + bank.project._id)
            .set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectDelete.body.message).toBe('Project removed');
        done();
    }));
});
