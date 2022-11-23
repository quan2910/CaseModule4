"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const company_router_1 = require("./company-router");
const post_router_1 = require("./post-router");
const major_router_1 = require("./major-router");
const apply_router_1 = require("./apply-router");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', user_router_1.userRouter);
exports.router.use('/companies', company_router_1.companyRouter);
exports.router.use('/posts', post_router_1.postRouter);
exports.router.use('/majors', major_router_1.majorRouter);
exports.router.use('/applies', apply_router_1.applyRouter);
//# sourceMappingURL=router.js.map