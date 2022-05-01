import Joi from "joi";
import { CreateTaskDTO, UpdateTaskDTO } from "../dto/TaskDTO";
export declare const createTaskSchema: Joi.ObjectSchema<CreateTaskDTO>;
export declare const updateTaskSchema: Joi.ObjectSchema<UpdateTaskDTO>;
