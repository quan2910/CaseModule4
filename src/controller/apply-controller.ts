import {Request, Response} from "express";
import {Apply} from "../model/apply";
import {Post} from "../model/post";

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
    //oke User xem đã apply vào những post nào
    findApplyInPost = async (req:Request,res:Response)=>{
        let id = req.params.id
        let users = await Apply.find({user: id}).populate('post','contents').populate('user','username');
        return res.status(200).json(users);
    }
    //chưa oke  Company xem CV của user
    findCvApplyInPost = async (req:Request,res:Response)=>{
        let id = req.params.id
        let users = await Apply.find({post: id}).populate('post','contents').populate('user')
        return res.status(200).json(users);
    }
    //show post của company đấy
    findPostOfCompany = async (req:Request,res:Response)=>{
        let id = req.params.id
        let post = await Post.find({company: id}).populate('major', 'majorName')
        return res.status(200).json(post);
    }

}
export default new ApplyController();