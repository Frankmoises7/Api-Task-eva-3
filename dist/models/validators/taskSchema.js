"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTaskSchema = exports.createTaskSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createTaskSchema = joi_1.default.object().keys({
    title: joi_1.default.string().required(),
    content: joi_1.default.string().required(),
    done: joi_1.default.boolean()
});
exports.updateTaskSchema = joi_1.default.object().keys({
    title: joi_1.default.string(),
    content: joi_1.default.string(),
    done: joi_1.default.boolean()
});
