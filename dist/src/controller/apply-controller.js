"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apply_1 = require("../model/apply");
const post_1 = require("../model/post");
class ApplyController {
    constructor() {
        this.finAll = async (req, res) => {
            let apply = await apply_1.Apply.find().populate('user', 'username');
            return res.status(200).json(apply);
        };
        this.add = async (req, res) => {
            let post = req.body;
            post = await apply_1.Apply.create(post);
            return res.status(201).json(post);
        };
        this.edit = async (req, res) => {
            let newApply = req.body;
            let id = req.params.id;
            await apply_1.Apply.updateOne({ _id: id }, {
                $set: newApply
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await apply_1.Apply.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
        this.findPostOfCompany = async (req, res) => {
            let id = req.params.id;
            let post = await post_1.Post.find({ company: id }).populate('major', 'majorName');
            return res.status(200).json(post);
        };
    }
}
exports.default = new ApplyController();
//# sourceMappingURL=apply-controller.js.map