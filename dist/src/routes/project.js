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
const User_1 = __importDefault(require("../models/User"));
const router = express_1.Router();
router.get('/projects', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Project_1.default.find();
        res.send(project);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.post('/projects', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqAuth = req;
    try {
        if (!reqAuth.body.name) {
            throw new Error('add all info');
        }
        if (!reqAuth.user) {
            throw new Error('Not authorization');
        }
        const projectCheck = yield Project_1.default.findByCredentials(req.body);
        if (projectCheck) {
            throw new Error('Project exist');
        }
        const pack = Object.assign(Object.assign({}, req.body), { owner: reqAuth.user._id, workers: [reqAuth.user._id] });
        const project = new Project_1.default(pack);
        yield project.save();
        yield project.populate('owner').execPopulate();
        yield project.populate('workers').execPopulate();
        res.send(project);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.get('/projects/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Project_1.default.findById(req.params.id);
        if (!project) {
            throw new Error('Project not found');
        }
        yield project.populate('owner').execPopulate();
        yield project.populate('workers').execPopulate();
        res.send(project);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.put('/projects/:id', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Project_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!project) {
            throw new Error('Project not found');
        }
        yield project.populate('owner').execPopulate();
        res.send(project);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.delete('/projects/:id', auth_1.default, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Project_1.default.findByIdAndDelete(req.params.id);
        if (!project) {
            throw new Error('Project not found');
        }
        res.send({ message: 'Project removed' });
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.get('/projects/:id/tasks', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqAuth = req;
    try {
        if (!reqAuth.user) {
            throw new Error('Not authorization');
        }
        const project = yield Project_1.default.findById(req.params.id);
        if (!project) {
            throw new Error('Project not found');
        }
        yield project.populate('tasks').execPopulate();
        res.send(project.tasks);
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.post('/projects/:id/worker', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqAuth = req;
    try {
        if (!reqAuth.body.email) {
            throw new Error('Not found email');
        }
        if (!reqAuth.user) {
            throw new Error('Not authorization');
        }
        const project = yield Project_1.default.findById(req.params.id);
        if (!project) {
            throw new Error('Project not found');
        }
        const user = yield User_1.default.findOne({ email: reqAuth.body.email });
        if (!user) {
            throw new Error('User not found');
        }
        project.workers.push(user._id);
        yield project.save();
        res.send({ message: 'Worker added to project' });
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
router.delete('/projects/:id/worker', auth_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const reqAuth = req;
    try {
        if (!reqAuth.body.email) {
            throw new Error('Not found email');
        }
        if (!reqAuth.user) {
            throw new Error('Not authorization');
        }
        const project = yield Project_1.default.findById(req.params.id);
        if (!project) {
            throw new Error('Project not found');
        }
        const user = yield User_1.default.findOne(reqAuth.body);
        if (!user) {
            throw new Error('User not found');
        }
        project.workers = project.workers.filter((person) => {
            return person !== user._id + '';
        });
        yield project.save();
        res.send({ message: 'Worker deleted from project' });
    }
    catch (e) {
        error_handling_1.default(e, res, 400);
    }
}));
exports.default = router;
