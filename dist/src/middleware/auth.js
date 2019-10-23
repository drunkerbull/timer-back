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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const error_handling_1 = __importDefault(require("../error-handling"));
const auth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const reqAuth = req;
    try {
        const token = req.header('Authorization');
        if (!token) {
            throw new Error('Please authenticate. Not found Header Authorization');
        }
        const formattedToken = token.replace('Bearer ', '');
        const decoded = jsonwebtoken_1.default.verify(formattedToken, 'thisissecret');
        const user = yield User_1.default.findOne({ _id: decoded._id, 'tokens.token': formattedToken });
        if (!user) {
            throw new Error('Please authenticate. Not found User');
        }
        reqAuth.user = user;
        next();
    }
    catch (e) {
        error_handling_1.default(e, res, 401);
    }
});
exports.default = auth;