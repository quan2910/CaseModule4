import {Schema, model} from "mongoose";
import {IUser} from "./user";
import {IPost} from "./post";
export interface IApply {
   user : IUser;
   post : IPost
}

let ApplySchema = new Schema<IApply>({
   user : {
       type : Schema.Types.ObjectId,
       ref : 'User'
   },
    post : {
       type : Schema.Types.ObjectId,
        ref : 'Post'
    }
});

let Apply = model<IApply>('Apply', ApplySchema);
export {Apply};