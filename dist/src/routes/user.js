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
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const error_handling_1 = __importDefault(require("../error-handling"));
const router = express_1.Router();
router.get('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.find({});
        res.send(user);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.get('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.params.id);
        if (!user) {
            throw new Error('User not found');
        }
        res.send(user);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.put('/users/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
            throw new Error('User not found');
        }
        res.send(user);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.delete('/users/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findByIdAndDelete(req.params.id);
        if (!user) {
            throw new Error('User not found');
        }
        res.send({ message: 'User removed' });
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
exports.default = router;
