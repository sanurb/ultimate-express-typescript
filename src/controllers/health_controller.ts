import type { Request, Response } from "ultimate-express";
import { Status } from "@reflet/http";

export const healthController = (_req: Request, res: Response): void => {
	res.status(Status.Ok).send("OK");
};
