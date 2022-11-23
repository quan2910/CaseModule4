import { Request, Response } from "express";
declare class MajorController {
    finAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    edit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: MajorController;
export default _default;
