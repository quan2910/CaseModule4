"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.majorRouter = void 0;
const express_1 = require("express");
const major_controller_1 = __importDefault(require("../controller/major-controller"));
exports.majorRouter = (0, express_1.Router)();
exports.majorRouter.get('', major_controller_1.default.finAll);
exports.majorRouter.post('', major_controller_1.default.addMajor);
exports.majorRouter.put('', major_controller_1.default.editMajor);
exports.majorRouter.delete('', major_controller_1.default.deleteMajor);
//# sourceMappingURL=major-router.js.map