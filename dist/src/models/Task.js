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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const TaskSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    project: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        required: true,
        ref: 'Project'
    },
    timers: [{
            start: {
                type: String
            },
            end: {
                type: String
            },
            owner: {
                type: String
            }
        }]
}, {
    timestamps: true
});
TaskSchema.statics.findByCredentials = (params) => __awaiter(void 0, void 0, void 0, function* () {
    const task = yield Task.findOne(params);
    if (!task) {
        return null;
    }
    return task;
});
const Task = mongoose_1.model('Task', TaskSchema);
exports.default = Task;
