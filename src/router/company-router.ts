import {Router} from "express";
import companyController from "../controller/company-controller";

export const companyRouter = Router();
companyRouter.get('',companyController.finAll);
companyRouter.post('',companyController.addCompany);
companyRouter.put('/:id',companyController.editCompany);
companyRouter.delete('/:id',companyController.deleteCompany);
companyRouter.post('/login',companyController.loginCompany);
companyRouter.post('/register',companyController.registerCompany);