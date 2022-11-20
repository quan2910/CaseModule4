import {Router} from "express";
import majorController from "../controller/major-controller";


export const majorRouter = Router();
majorRouter.get('',majorController.finAll);
majorRouter.post('',majorController.addMajor);
majorRouter.put('',majorController.editMajor);
majorRouter.delete('',majorController.deleteMajor);