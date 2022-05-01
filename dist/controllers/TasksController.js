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
const TaskRepository_1 = __importDefault(require("../models/repositories/TaskRepository"));
const taskSchema_1 = require("../models/validators/taskSchema");
class TaskController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                const repository = new TaskRepository_1.default(user.sub);
                const task = yield repository.findAll();
                res.json(task);
            }
            catch (error) {
                console.log(error.message);
                res.status(500).json({ message: 'Something went wrong' });
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            const task = yield repository.findById(parseInt(id));
            if (!task) {
                res.status(400).json({ message: 'Task not found' });
                return;
            }
            if (task.userId !== user.sub) {
                res.status(403).json({ message: ' You dont have permissions' });
                return;
            }
            res.json(task);
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const task = req.body;
            try {
                yield taskSchema_1.createTaskSchema.validateAsync(task);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
            }
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            try {
                const newTask = yield repository.create(task);
                res.status(201).json(newTask);
            }
            catch (error) {
                if (error.code === 'P2002') {
                    res.status(409).json({ message: 'Task already exist' });
                    return;
                }
                console.log(error);
                res.status(500).json({ message: 'Something went wrong' });
                return;
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const task = req.body;
            try {
                yield taskSchema_1.updateTaskSchema.validateAsync(task);
            }
            catch (error) {
                res.status(400).json({ message: error.message });
                return;
            }
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            try {
                const taskFromDb = yield repository.findById(parseInt(id));
                if (!taskFromDb) {
                    res.status(400).json({ message: 'Task not found' });
                    return;
                }
                if (taskFromDb.userId !== user.sub) {
                    res.status(403).json({ message: 'You dont have permissions' });
                    return;
                }
                yield repository.update(parseInt(id), task);
                res.sendStatus(202);
                return task;
            }
            catch (error) {
                if (error.code === 'P2002') {
                    res.status(409).json({ message: 'Task already exists' });
                    return;
                }
                console.log(error);
                res.status(500).json({ message: 'Somenthing went wronf' });
                return;
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const user = req.user;
            const repository = new TaskRepository_1.default(user.sub);
            try {
                const taskFromDb = yield repository.findById(parseInt(id));
                if (!taskFromDb) {
                    res.status(404).json({ message: 'Task not found' });
                }
                if ((taskFromDb === null || taskFromDb === void 0 ? void 0 : taskFromDb.userId) !== user.sub) {
                    res.status(403).json({ message: 'You dont have permissions' });
                    return;
                }
                yield repository.delete(parseInt(id));
                res.status(204).json({ message: 'Task elimited' });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ message: 'Something went wrong' });
            }
        });
    }
}
exports.default = TaskController;
