"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cv = void 0;
const mongoose_1 = require("mongoose");
let CvSchema = new mongoose_1.Schema({
    fileCv: String,
    editTime: String,
    idUser: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    }
});
let Cv = (0, mongoose_1.model)('Cv', CvSchema);
exports.Cv = Cv;
//# sourceMappingURL=CV.js.map