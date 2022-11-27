import { Request, Response } from "express";
declare class PostController {
    finAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    add: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    edit: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    delete: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAllByMajor: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findByIdPost: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    findAllByName: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PostController;
export default _default;
