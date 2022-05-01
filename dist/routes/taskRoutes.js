"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const TasksController_1 = __importDefault(require("../controllers/TasksController"));
const tokenValidator_1 = __importDefault(require("../middlewares/tokenValidator"));
const taskRoutes = (0, express_1.Router)();
const controller = new TasksController_1.default();
taskRoutes.get('/', (0, tokenValidator_1.default)(), controller.getAll);
taskRoutes.get('/:id', controller.getById);
taskRoutes.post('/', controller.create);
taskRoutes.put('/:id', controller.update);
taskRoutes.post('/:id', controller.delete);
exports.default = taskRoutes;
