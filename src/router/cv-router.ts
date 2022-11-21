import {Router} from "express";
import cvController from "../controller/cv-controller";


export const cvRouter =Router();
cvRouter.get('',cvController.finAllCv);
cvRouter.post('',cvController.addCv);
cvRouter.put('/:id',cvController.editCv);
cvRouter.delete('/:id',cvController.deleteCv);