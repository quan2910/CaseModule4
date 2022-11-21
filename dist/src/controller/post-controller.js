"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../model/post");
class PostController {
    constructor() {
        this.finAll = async (req, res) => {
            let posts = await post_1.Post.find().populate('company', 'companyName').populate('major', 'majorName');
            return res.status(200).json(posts);
        };
        this.add = async (req, res) => {
            let post = req.body;
            post = await post_1.Post.create(post);
            return res.status(201).json(post);
        };
        this.edit = async (req, res) => {
            let newPost = req.body;
            let id = req.params.id;
            await post_1.Post.updateOne({ _id: id }, {
                $set: newPost
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await post_1.Post.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
        this.findAllByMajor = async (req, res) => {
            let id = req.params.id;
            let posts = await post_1.Post.find({ major: id });
            return res.status(200).json(posts);
        };
        this.findAllByName = async (req, res) => {
            let name = req.body.namePost;
            let findName = await post_1.Post.find({ namePost: { $regex: name } });
            return res.status(200).json(findName);
        };
    }
}
exports.default = new PostController();
//# sourceMappingURL=post-controller.js.map