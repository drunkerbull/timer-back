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
const error_handling_1 = __importDefault(require("../error-handling"));
const Project_1 = __importDefault(require("../models/Project"));
const auth_1 = __importDefault(require("../middleware/auth"));
const Task_1 = __importDefault(require("../models/Task"));
const router = express_1.Router();
router.get('/tasks', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.find({});
        res.send(task);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.post('/tasks', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqAuth = req;
    try {
        if (!reqAuth.body.name) {
            throw new Error('add all info');
        }
        if (!reqAuth.user) {
            throw new Error('Not authorization');
        }
        const project = yield Project_1.default.findById(req.body.project);
        if (!project) {
            throw new Error('Project not exist');
        }
        const taskCheck = yield Task_1.default.findByCredentials({ name: req.body.name });
        if (taskCheck) {
            throw new Error('Task exist');
        }
        const pack = Object.assign(Object.assign({}, req.body), { owner: reqAuth.user._id });
        const task = new Task_1.default(pack);
        yield task.save();
        res.send(task);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.get('/tasks/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.findById(req.params.id);
        if (!task) {
            throw new Error('Task not found');
        }
        res.send(task);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.put('/tasks/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!task) {
            throw new Error('Task not found');
        }
        res.send(task);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.post('/tasks/:id/timer', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqAuth = req;
    try {
        const task = yield Task_1.default.findById(req.params.id);
        if (!task) {
            throw new Error('Task not found');
        }
        const pack = Object.assign(Object.assign({}, req.body), { owner: reqAuth.user._id });
        task.timers.push(pack);
        yield task.save();
        res.send(task);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.put('/tasks/:id/timer', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.findById(req.params.id);
        if (!task) {
            throw new Error('Task not found');
        }
        task.timers[req.body.index].start = req.body.start;
        task.timers[req.body.index].end = req.body.end;
        yield task.save();
        res.send(task);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.delete('/tasks/:id/timer', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.findById(req.params.id);
        if (!task) {
            throw new Error('Task not found');
        }
        task.timers.splice(req.body.index, 1);
        yield task.save();
        res.send({ message: 'Timer removed' });
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.delete('/tasks/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield Task_1.default.findByIdAndDelete(req.params.id);
        if (!task) {
            throw new Error('Task not found');
        }
        res.send({ message: 'Task removed' });
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
exports.default = router;
