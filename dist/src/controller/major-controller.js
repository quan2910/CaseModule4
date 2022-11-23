"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const major_1 = require("../model/major");
class MajorController {
    constructor() {
        this.finAll = async (req, res) => {
            let majors = await major_1.Major.find();
            return res.status(200).json(majors);
        };
        this.add = async (req, res) => {
            let major = req.body;
            major = await major_1.Major.create(major);
            return res.status(201).json(major);
        };
        this.edit = async (req, res) => {
            let newMajor = req.body;
            let id = req.params.id;
            await major_1.Major.updateOne({ _id: id }, {
                $set: newMajor
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await major_1.Major.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
    }
}
exports.default = new MajorController();
//# sourceMappingURL=major-controller.js.map