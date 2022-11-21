"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CV_1 = require("../model/CV");
class CvController {
    constructor() {
        this.finAllCv = async (req, res) => {
            let cv = await CV_1.Cv.find();
            return res.status(200).json(cv);
        };
        this.addCv = async (req, res) => {
            let cv = req.body;
            cv = await CV_1.Cv.create(cv);
            return res.status(201).json(cv);
        };
        this.editCv = async (req, res) => {
            let newCv = req.body;
            let id = req.params.id;
            await CV_1.Cv.updateOne({ _id: id }, {
                $set: newCv
            });
            return res.status(200).json({
                message: " edit successfully "
            });
        };
        this.deleteCv = async (req, res) => {
            let id = req.params.id;
            await CV_1.Cv.deleteOne({ _id: id });
            return res.status(200).json({
                massage: "delete successfully"
            });
        };
    }
}
exports.default = new CvController();
//# sourceMappingURL=cv-controller.js.map