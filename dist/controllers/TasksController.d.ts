import type { Request, Response } from "express";
export default class TaskController {
    readonly getAll: (req: Request, res: Response) => Promise<void>;
    readonly getById: (req: Request, res: Response) => Promise<void>;
    readonly create: (req: Request, res: Response) => Promise<void>;
    readonly update: (req: Request, res: Response) => Promise<Partial<import("../models/dto/TaskDTO").BaseTaskDTO> | undefined>;
    readonly delete: (req: Request, res: Response) => Promise<void>;
}
