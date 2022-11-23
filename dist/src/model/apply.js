"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apply = void 0;
const mongoose_1 = require("mongoose");
let ApplySchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Post'
    }
});
let Apply = (0, mongoose_1.model)('Apply', ApplySchema);
exports.Apply = Apply;
//# sourceMappingURL=apply.js.map