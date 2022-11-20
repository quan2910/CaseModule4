import { Request, Response } from "express";
declare class MajorController {
    finAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addMajor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editMajor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteMajor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: MajorController;
export default _default;
