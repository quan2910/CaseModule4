import {Request, Response} from "express";
import {Cv} from "../model/CV";


class CvController{
    finAllCv = async (req:Request,res:Response)=>{
        let cv = await Cv.find();
        return res.status(200).json(cv);
    }
    addCv = async (req:Request,res: Response)=>{
        let cv = req.body;
        cv = await Cv.create(cv);
        return res.status(201).json(cv);
    }
    editCv = async (req: Request,res:Response)=>{
        let newCv = req.body
        let id = req.params.id
        await Cv.updateOne(
            {_id:id},{
                $set: newCv
            })
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    deleteCv = async (req:Request,res:Response)=> {
        let id = req.params.id
        await Cv.deleteOne({_id:id});
        return res.status(200).json({
            massage: "delete successfully"
        })
    }
}
export default new CvController();