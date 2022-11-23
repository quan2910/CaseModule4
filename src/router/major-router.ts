import {Router} from "express";
import majorController from "../controller/major-controller";


export const majorRouter = Router();
majorRouter.get('',majorController.finAll);
majorRouter.post('',majorController.add);
majorRouter.put('',majorController.edit);
majorRouter.delete('',majorController.delete);