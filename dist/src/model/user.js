"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
let UserSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    cv: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Cv'
    }
});
let User = (0, mongoose_1.model)('User', UserSchema);
exports.User = User;
//# sourceMappingURL=user.js.map