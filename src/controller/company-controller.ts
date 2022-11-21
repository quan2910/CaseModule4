import {Request, Response} from "express";
import {Company} from "../model/company";


class CompanyController{
    finAll = async (req: Request,res: Response)=>{
        let companies = await Company.find();
        return res.status(200).json(companies);
    }
    addCompany = async (req: Request,res: Response)=> {
        let company = req.body;
        company = await Company.create(company);
        return res.status(201).json(company);
    }
    editCompany = async (req:Request,res:Response)=>{
        let newCompany = req.body
        let id = req.params.id
        await Company.updateOne(
            {_id:id},{
                $set: newCompany
            })
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    deleteCompany = async (req:Request,res:Response)=> {
        let id = req.params.id
        await Company.deleteOne({_id:id});
        return res.status(200).json({
            massage: "delete successfully"
        })
    }
}
export default new CompanyController();