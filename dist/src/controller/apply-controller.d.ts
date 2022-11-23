import { Request, Response } from "express";
declare class ApplyController {
    finAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    edit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findPostOfCompany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: ApplyController;
export default _default;
