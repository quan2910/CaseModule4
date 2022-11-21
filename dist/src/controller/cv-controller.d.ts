import { Request, Response } from "express";
declare class CvController {
    finAllCv: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addCv: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editCv: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteCv: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CvController;
export default _default;
