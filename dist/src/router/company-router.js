"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = require("express");
const company_controller_1 = __importDefault(require("../controller/company-controller"));
exports.companyRouter = (0, express_1.Router)();
exports.companyRouter.post('/register', company_controller_1.default.register);
exports.companyRouter.post('/login', company_controller_1.default.login);
exports.companyRouter.get('', company_controller_1.default.finAll);
exports.companyRouter.post('', company_controller_1.default.addCompany);
exports.companyRouter.put('/:id', company_controller_1.default.editCompany);
exports.companyRouter.delete('/:id', company_controller_1.default.deleteCompany);
//# sourceMappingURL=company-router.js.map