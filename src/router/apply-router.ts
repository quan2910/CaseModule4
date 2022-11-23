import {Router} from "express";
import applyController from "../controller/apply-controller";


export const applyRouter = Router();
applyRouter.get('', applyController.finAll);
applyRouter.post('', applyController.add);
applyRouter.put('/:id', applyController.edit);
applyRouter.delete('/:id', applyController.delete);
applyRouter.get('/findCompany/:id',applyController.findPostOfCompany);

