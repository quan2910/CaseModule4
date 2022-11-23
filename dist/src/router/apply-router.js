"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyRouter = void 0;
const express_1 = require("express");
const apply_controller_1 = __importDefault(require("../controller/apply-controller"));
exports.applyRouter = (0, express_1.Router)();
exports.applyRouter.get('', apply_controller_1.default.finAll);
exports.applyRouter.post('', apply_controller_1.default.addApply);
exports.applyRouter.put('/:id', apply_controller_1.default.editApply);
exports.applyRouter.delete('/:id', apply_controller_1.default.deleteApply);
//# sourceMappingURL=apply-router.js.map