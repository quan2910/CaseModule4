import { Request, Response } from "express";
declare class CompanyController {
    finAll: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    addCompany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    editCompany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteCompany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    registerCompany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    loginCompany: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: CompanyController;
export default _default;
