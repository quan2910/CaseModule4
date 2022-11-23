import {Router} from "express";
import applyController from "../controller/apply-controller";


export const applyRouter = Router();
applyRouter.get('', applyController.finAll);
applyRouter.post('', applyController.addApply);
applyRouter.put('/:id', applyController.editApply);
applyRouter.delete('/:id', applyController.deleteApply);
