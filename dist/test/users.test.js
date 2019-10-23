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
describe('USERS', () => {
    let bank = { user: null, token: '' };
    it('should create user OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUser = {
            email: 'testUsersOK',
            nickname: 'testUsersnickname',
            pass: 'testpassUsersOK'
        };
        const packUserLogin = {
            email: 'testUsersOK',
            pass: 'testpassUsersOK'
        };
        const resUserCreate = yield supertest_1.default(app_1.default)
            .post('/register')
            .send(packUser);
        expect(resUserCreate.body.email).toBe(packUser.email);
        expect(resUserCreate.body.pass).toBe(packUser.pass);
        bank.user = resUserCreate.body;
        done();
    }));
    it('should get all users OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resUsersGet = yield supertest_1.default(app_1.default).get('/users');
        expect(resUsersGet.body.length).toBeGreaterThanOrEqual(1);
        expect(resUsersGet.body[0]).toEqual(bank.user);
        done();
    }));
    it('should get user OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resUserGet = yield supertest_1.default(app_1.default).get('/users/' + bank.user._id);
        expect(resUserGet.body).toEqual(bank.user);
        done();
    }));
    it('should put user OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const packUser = {
            email: 'testOKUsersAfterPUT',
            pass: 'testpassOKUsersAfterPUT'
        };
        const resUserUpdate = yield supertest_1.default(app_1.default).put('/users/' + bank.user._id)
            .send(packUser);
        expect(resUserUpdate.body.email).toBe(packUser.email);
        expect(resUserUpdate.body.pass).toBe(packUser.pass);
        bank.user = resUserUpdate.body;
        done();
    }));
    it('should delete user OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const resUserDelete = yield supertest_1.default(app_1.default).delete('/users/' + bank.user._id);
        expect(resUserDelete.body.message).toBe('User removed');
        done();
    }));
});
