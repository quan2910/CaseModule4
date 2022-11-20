import { Request, Response } from "express";
declare class ApplyController {
    finAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addApply: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editApply: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteApply: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ApplyController;
export default _default;
