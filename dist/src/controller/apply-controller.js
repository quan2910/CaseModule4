"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apply_1 = require("../model/apply");
const CV_1 = require("../model/CV");
class ApplyController {
    constructor() {
        this.finAll = async (req, res) => {
            let apply = await apply_1.Apply.find();
            return res.status(200).json(apply);
        };
        this.addApply = async (req, res) => {
            let post = req.body;
            post = await apply_1.Apply.create(post);
            return res.status(201).json(post);
        };
        this.editApply = async (req, res) => {
            let newApply = req.body;
            let id = req.params.id;
            await apply_1.Apply.updateOne({ _id: id }, {
                $set: newApply
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.deleteApply = async (req, res) => {
            let id = req.params.id;
            await apply_1.Apply.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
        this.findApplyInPost = async (req, res) => {
            let id = req.params.id;
            let users = await apply_1.Apply.find({ user: id }).populate('post', 'contents').populate('user', 'username');
            return res.status(200).json(users);
        };
        this.findCvApplyInPost = async (req, res) => {
            let id = req.params.id;
            let users = await CV_1.Cv.find({ post: id }).populate('user', 'username');
            return res.status(200).json(users);
        };
    }
}
exports.default = new ApplyController();
//# sourceMappingURL=apply-controller.js.map