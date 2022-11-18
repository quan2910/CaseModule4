"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose_1 = require("mongoose");
let CompanySchema = new mongoose_1.Schema({
    companyName: String,
    password: String
});
let Company = (0, mongoose_1.model)('Company', CompanySchema);
exports.Company = Company;
//# sourceMappingURL=company.js.map