"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Major = void 0;
const mongoose_1 = require("mongoose");
let MajorSchema = new mongoose_1.Schema({
    majorName: String,
});
let Major = (0, mongoose_1.model)('Major', MajorSchema);
exports.Major = Major;
//# sourceMappingURL=major.js.map