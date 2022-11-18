import {Router} from "express";
import userController from "../controller/user-controller";

export const userRouter = Router()
userRouter.post('/register', userController.register);
userRouter.post('/login', userController.login)