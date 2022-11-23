import {Router} from "express";
import companyController from "../controller/company-controller";

export const companyRouter = Router();
companyRouter.get('',companyController.finAll);
companyRouter.post('',companyController.add);
companyRouter.put('/:id',companyController.edit);
companyRouter.delete('/:id',companyController.delete);
companyRouter.post('/login',companyController.loginCompany);
companyRouter.post('/register',companyController.registerCompany);