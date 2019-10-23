"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("./db/mongoose"));
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const task_1 = __importDefault(require("./routes/task"));
const project_1 = __importDefault(require("./routes/project"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const path = require('path');
const db = mongoose_1.default.init(process.env.DB_USER, process.env.DB_PASS, process.env.DB_BASE);
const app = express_1.default();
app.use(cors_1.default());
app.set('port', 5000);
app.use(express_1.default.json());
app.use(auth_1.default);
app.use(user_1.default);
app.use(task_1.default);
app.use(project_1.default);
app.use(express_1.default.static(__dirname + '/views'));
app.get('**', function (req, res, next) {
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
exports.default = app;
