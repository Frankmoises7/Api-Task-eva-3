import { NextFunction, Request, Response } from "express";
export default function tokenValidator(): (req: Request, res: Response, next: NextFunction) => Promise<void>;
