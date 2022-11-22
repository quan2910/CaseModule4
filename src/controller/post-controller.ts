import {Request, Response} from "express";
import {Post} from "../model/post";
import {Apply} from "../model/apply";
import {User} from "../model/user";
import {Company} from "../model/company";
class PostController{
    finAll = async (req:Request,res:Response)=>{
        let posts = await Post.find().populate('company','companyName').populate('major','majorName');
        return res.status(200).json(posts);
    }

    add = async (req: Request,res: Response)=> {
        let post = req.body;
        post = await Post.create(post);
        return res.status(201).json(post);
    }
    edit = async (req:Request,res:Response)=>{
        let newPost = req.body
        let id = req.params.id
        await Post.updateOne(
            {_id:id},{
                $set: newPost
            })
        return res.status(200).json({
            message: " edit successfully "
        })
    }
    delete = async (req:Request,res:Response)=> {
        let id = req.params.id;
        await Post.deleteOne({_id:id});
        return res.status(200).json({
            massage: "delete successfully"
        })
    }

}
export default
new PostController();