"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cvRouter = void 0;
const express_1 = require("express");
const cv_controller_1 = __importDefault(require("../controller/cv-controller"));
exports.cvRouter = (0, express_1.Router)();
exports.cvRouter.get('', cv_controller_1.default.finAllCv);
exports.cvRouter.post('', cv_controller_1.default.addCv);
exports.cvRouter.put('/:id', cv_controller_1.default.editCv);
exports.cvRouter.delete('/:id', cv_controller_1.default.deleteCv);
//# sourceMappingURL=cv-router.js.map