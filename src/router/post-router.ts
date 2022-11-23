import {Router} from "express";
import postController from "../controller/post-controller";


export const postRouter =Router();
postRouter.get('',postController.finAll);
postRouter.post('',postController.add);
postRouter.put('/:id',postController.edit);
postRouter.delete('/:id',postController.delete);
postRouter.get('/search-by-name',postController.findAllByName);
postRouter.get('/:id',postController.findAllByMajor);
