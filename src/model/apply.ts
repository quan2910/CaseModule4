import {Schema, model} from "mongoose";
import {IUser} from "./user";
import {IPost} from "./post";
export interface IApply {
   idUser : IUser;
   idPost : IPost
}

let ApplySchema = new Schema<IApply>({
   idUser : {
       type : Schema.Types.ObjectId,
       ref : 'User'
   },
    idPost : {
       type : Schema.Types.ObjectId,
        ref : 'Post'
    }
});

let Apply = model<IApply>('Apply', ApplySchema);
export {Apply};