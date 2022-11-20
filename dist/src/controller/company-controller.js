"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const company_1 = require("../model/company");
class CompanyController {
    constructor() {
        this.finAll = async (req, res) => {
            let companies = await company_1.Company.find();
            return res.status(200).json(companies);
        };
        this.addCompany = async (req, res) => {
            let company = req.body;
            company = await company_1.Company.create(company);
            return res.status(201).json(company);
        };
        this.editCompany = async (req, res) => {
            let newCompany = req.body;
            let id = req.params.id;
            await company_1.Company.updateOne({ _id: id }, {
                $set: newCompany
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.deleteCompany = async (req, res) => {
            let id = req.params.id;
            await company_1.Company.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
    }
}
exports.default = new CompanyController();
//# sourceMappingURL=company-controller.js.map