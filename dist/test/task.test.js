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
describe('TASKS', () => {
    const bank = { project: null, user: null, task: null, token: '' };
    it('should register and login and create project OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUser = {
            email: 'testTaskOK',
            nickname: 'testTasknickname',
            pass: 'testpassTaskOK'
        };
        const packUserLogin = {
            email: 'testTaskOK',
            pass: 'testpassTaskOK'
        };
        const packCreateProject = {
            name: 'testProjectTaskOK'
        };
        const resRegister = yield supertest_1.default(app_1.default).post('/register').send(packUser);
        expect(resRegister.body.email).toBe(packUser.email);
        const resLogin = yield supertest_1.default(app_1.default).post('/login').send(packUserLogin);
        expect(resLogin.body.user.nickname).toBe(packUser.nickname);
        expect(resLogin.body.user.email).toBe(packUser.email);
        bank.token = resLogin.body.token;
        bank.user = resLogin.body.user;
        const resProjectCreate = yield supertest_1.default(app_1.default).post('/projects')
            .set('Authorization', 'Bearer ' + bank.token).send(packCreateProject);
        expect(resProjectCreate.body.name).toBe(packCreateProject.name);
        bank.project = resProjectCreate.body;
        done();
    }));
    it('should create task OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const pack = {
            name: 'testTaskOKCreate',
            project: bank.project._id
        };
        const resTaskCreate = yield supertest_1.default(app_1.default).post('/tasks')
            .send(pack).set('Authorization', 'Bearer ' + bank.token);
        expect(resTaskCreate.body.name).toBe(pack.name);
        bank.task = resTaskCreate.body;
        done();
    }));
    it('should get all tasks OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resProjectGetTasks = yield supertest_1.default(app_1.default).get('/tasks')
            .set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectGetTasks.body.length).toBeGreaterThanOrEqual(1);
        expect(resProjectGetTasks.body[0]).toEqual(bank.task);
        done();
    }));
    it('should get task OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resTaskGet = yield supertest_1.default(app_1.default).get('/tasks/' + bank.task._id)
            .set('Authorization', 'Bearer ' + bank.token);
        expect(resTaskGet.body).toEqual(bank.task);
        done();
    }));
    it('should post timer in task OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packTimer = {
            start: '12:00',
            end: '12:20',
            owner: bank.user._id
        };
        const resTimerPost = yield supertest_1.default(app_1.default).post('/tasks/' + bank.task._id + '/timer')
            .set('Authorization', 'Bearer ' + bank.token).send(packTimer);
        expect(resTimerPost.body.timers[0].start).toBe(packTimer.start);
        done();
    }));
    it('should put timer in task OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packTimerUpdate = {
            start: '14:44',
            end: '16:23',
            index: 0
        };
        const resTimerUpdate = yield supertest_1.default(app_1.default).put('/tasks/' + bank.task._id + '/timer')
            .set('Authorization', 'Bearer ' + bank.token).send(packTimerUpdate);
        expect(resTimerUpdate.body.timers[0].start).toBe(packTimerUpdate.start);
        done();
    }));
    it('should delete timer in task OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packTimerDelete = {
            index: 0
        };
        const resTimerDelete = yield supertest_1.default(app_1.default).delete('/tasks/' + bank.task._id + '/timer')
            .set('Authorization', 'Bearer ' + bank.token).send(packTimerDelete);
        expect(resTimerDelete.body.message).toBe('Timer removed');
        done();
    }));
    it('should put task OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUpdateTask = {
            name: 'testTaskOKUpdated'
        };
        const resTaskCreate = yield supertest_1.default(app_1.default).put('/tasks/' + bank.task._id)
            .set('Authorization', 'Bearer ' + bank.token).send(packUpdateTask);
        expect(resTaskCreate.body.name).toBe(packUpdateTask.name);
        bank.task = resTaskCreate.body;
        done();
    }));
    it('should delete task OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resProjectGetTasks = yield supertest_1.default(app_1.default).delete('/tasks/' + bank.task._id)
            .set('Authorization', 'Bearer ' + bank.token);
        expect(resProjectGetTasks.body.message).toBe('Task removed');
        done();
    }));
});
