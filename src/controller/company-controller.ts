import {Request, Response} from "express";
import {Company} from "../model/company";
import {User} from "../model/user";
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt';


class CompanyController {
    finAll = async (req: Request, res: Response) => {
        let companies = await Company.find();
        return res.status(200).json(companies);
    }
    addCompany = async (req: Request, res: Response) => {
        let company = req.body;
        company = await Company.create(company);
        return res.status(201).json(company);

    }
    editCompany = async (req: Request, res: Response) => {
        let newCompany = req.body
        let id = req.params.id
        await Company.updateOne(
            {_id: id}, {
                $set: newCompany
            })
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    deleteCompany = async (req: Request, res: Response) => {
        let id = req.params.id
        await Company.deleteOne({_id: id});
        return res.status(200).json({
            massage: "delete successfully"
        })
    }
    register = async (req: Request, res: Response) => {
        let company = req.body;
        console.log(company)
        const companyFind = await Company.findOne({
            companyName: company.companyName
        })
        if (companyFind) {
            res.status(200).json({
                mess: "Tai khoan da ton tai",
                checkRegister: false
            })
        } else {
            company.password = await bcrypt.hash(company.password, 10)
            await Company.create(company)

            return res.status(200).json({
                mess: "Thanh cong",
                checkRegister: true
            })
        }
    }
    login = async (req: Request, res: Response) => {
        let company = req.body;
        let companyFind = await Company.findOne({
            companyName: company.companyName
        })
        if (!companyFind) {
            return res.status(200).json({
                massage: 'Company is not exist!!'
            })
        } else {
            let comparePassword = await bcrypt.compare(company.password, companyFind.password)
            if (!comparePassword) {
                return res.status(200).json({
                    massage: 'Password is wrong'
                })
            } else {
                let payload = {
                    idCompany: companyFind._id,
                    companyName: companyFind.companyName
                }
                let secret = 'aloblo'
                let token = await jwt.sign(payload, secret, {
                    expiresIn: 36000
                });
                return res.status(200).json({
                    token: token,
                    idCompany: companyFind._id
                })
            }
        }
    }
}

export default new CompanyController();