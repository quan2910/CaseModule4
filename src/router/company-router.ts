import {Router} from "express";
import companyController from "../controller/company-controller";
import userController from "../controller/user-controller";
import {userRouter} from "./user-router";

export const companyRouter = Router();
companyRouter.post('/register', companyController.register);
companyRouter.post('/login', companyController.login)
companyRouter.get('',companyController.finAll);
companyRouter.post('',companyController.addCompany);
companyRouter.put('/:id',companyController.editCompany);
companyRouter.delete('/:id',companyController.deleteCompany);