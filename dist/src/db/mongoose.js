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
const mongoose_1 = __importDefault(require("mongoose"));
class MongoDB {
    constructor() {
        this.uri = '';
        this.currentMongoose = mongoose_1.default;
    }
    init(dbLogin = '', dbPass = '', dataBaseName = '') {
        return __awaiter(this, void 0, void 0, function* () {
            this.uri = `mongodb+srv://${dbLogin}:${dbPass}@cluster0-uneen.gcp.mongodb.net/${dataBaseName}`;
            try {
                yield this.currentMongoose.connect(this.uri, {
                    useNewUrlParser: true,
                    useCreateIndex: true,
                    useUnifiedTopology: true
                });
                this.currentMongoose.set('useFindAndModify', false);
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
const DB = new MongoDB();
exports.default = DB;
