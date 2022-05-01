import { Request, Response } from "express";
export default class AuthController {
    readonly login: (req: Request, res: Response) => Promise<void>;
    readonly register: (req: Request, res: Response) => Promise<void>;
}
