"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
let PostSchema = new mongoose_1.Schema({
    namePost: String,
    contents: String,
    major: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Major'
    },
    company: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Company'
    }
});
let Post = (0, mongoose_1.model)('Post', PostSchema);
exports.Post = Post;
//# sourceMappingURL=post.js.map