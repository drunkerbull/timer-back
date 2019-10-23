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
describe('AUTH', () => {
    it('should register user OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const pack = {
            email: 'testOK',
            nickname: 'nickname',
            pass: 'testpassOK'
        };
        const resRegister = yield supertest_1.default(app_1.default)
            .post('/register')
            .send(pack);
        expect(resRegister.body.email).toBe(pack.email);
        expect(resRegister.body.pass).toBe(pack.pass);
        done();
    }));
    it('should register user exist NOT OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const pack = {
            email: 'testOK',
            nickname: 'nickname',
            pass: 'testpassOK'
        };
        const resRegisterExist = yield supertest_1.default(app_1.default)
            .post('/register')
            .send(pack);
        expect(resRegisterExist.status).toBe(400);
        expect(resRegisterExist.body).toEqual({ error: 'Error: User exist' });
        done();
    }));
    it('should register user send not all data NOT OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const pack = {};
        const resRegisterNotAllData = yield supertest_1.default(app_1.default)
            .post('/register')
            .send(pack);
        expect(resRegisterNotAllData.status).toBe(400);
        expect(resRegisterNotAllData.body).toEqual({ error: 'Error: add all info' });
        done();
    }));
    it('should login user OK', (done) => __awaiter(void 0, void 0, void 0, function* () {
        const pack = {
            email: 'testOK',
            pass: 'testpassOK'
        };
        const resLogin = yield supertest_1.default(app_1.default)
            .post('/login')
            .send(pack);
        expect(resLogin.body.user.email).toBe(pack.email);
        done();
    }));
});
