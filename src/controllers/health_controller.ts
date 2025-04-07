import type { Request, Response } from "ultimate-express";
import { Status } from "@reflet/http";

/** Responds with a 200 OK status and 'OK' message. */
export function getHealth(_req: Request, res: Response): void {
    res.status(Status.Ok).send("OK");
}
