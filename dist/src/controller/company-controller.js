"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const company_1 = require("../model/company");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CompanyController {
    constructor() {
        this.finAll = async (req, res) => {
            let companies = await company_1.Company.find();
            return res.status(200).json(companies);
        };
        this.add = async (req, res) => {
            let company = req.body;
            company = await company_1.Company.create(company);
            return res.status(201).json(company);
        };
        this.edit = async (req, res) => {
            let newCompany = req.body;
            let id = req.params.id;
            await company_1.Company.updateOne({ _id: id }, {
                $set: newCompany
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await company_1.Company.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
        this.registerCompany = async (req, res) => {
            let company = req.body;
            company.password = await bcrypt_1.default.hash(company.password, 10);
            company = await company_1.Company.create(company);
            return res.status(201).json(company);
        };
        this.loginCompany = async (req, res) => {
            let company = req.body;
            let companyFind = await company_1.Company.findOne({
                companyName: company.companyName
            });
            if (!companyFind) {
                return res.status(200).json({
                    massage: 'Company is not exist!!'
                });
            }
            else {
                let comparePassword = await bcrypt_1.default.compare(company.password, companyFind.password);
                if (!comparePassword) {
                    return res.status(200).json({
                        massage: 'Password is wrong'
                    });
                }
                else {
                    let payload = {
                        idCompany: companyFind._id,
                        companyName: companyFind.companyName
                    };
                    let secret = 'aloalo';
                    let token = await jsonwebtoken_1.default.sign(payload, secret, {
                        expiresIn: 36000
                    });
                    return res.status(200).json({
                        token: token,
                        idCompany: companyFind._id
                    });
                }
            }
        };
    }
}
exports.default = new CompanyController();
//# sourceMappingURL=company-controller.js.map