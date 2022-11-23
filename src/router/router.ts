import {Router} from "express";
import {userRouter} from "./user-router";
import {companyRouter} from "./company-router";
import {postRouter} from "./post-router";
import {majorRouter} from "./major-router";
import {applyRouter} from "./apply-router";


export const router = Router();
router.use('/auth', userRouter);
router.use('/companies',companyRouter);
router.use('/posts',postRouter);
router.use('/majors',majorRouter);
router.use('/applies',applyRouter);
