import {Request, Response} from "express";
import {Major} from "../model/major";


class MajorController{
    finAll = async (req:Request,res:Response)=>{
        let majors = await Major.find();
        return res.status(200).json(majors);
    }
    addMajor = async (req:Request,res: Response)=>{
        let major = req.body;
        major = await Major.create(major);
        return res.status(201).json(major);
    }
    editMajor = async (req: Request,res:Response)=>{
        let newMajor = req.body
        let id = req.params.id
        await Major.updateOne(
            {_id:id},{
                $set: newMajor
            })
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    deleteMajor = async (req:Request,res:Response)=> {
        let id = req.params.id
        await Major.deleteOne({_id:id});
        return res.status(200).json({
            massage: "delete successfully"
        })
    }
}
export default new MajorController();