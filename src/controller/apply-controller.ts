import {Request, Response} from "express";
import {Apply} from "../model/apply";

class ApplyController{
    finAll = async (req:Request,res:Response)=>{
        let apply = await Apply.find();
        return res.status(200).json(apply);
    }
    addApply = async (req: Request,res: Response)=> {
        let post = req.body;
        post = await Apply.create(post);
        return res.status(201).json(post);

    }
    editApply = async (req:Request,res:Response)=>{
        let newApply = req.body
        let id = req.params.id
        await Apply.updateOne(
            {_id:id},{
                $set: newApply
            })
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    deleteApply = async (req:Request,res:Response)=> {
        let id = req.params.id
        await Apply.deleteOne({_id:id});
        return res.status(200).json({
            massage: "delete successfully"
        })
    }
}
export default new ApplyController();