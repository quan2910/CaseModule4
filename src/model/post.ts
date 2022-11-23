import {Schema, model} from "mongoose";
import {IMajor} from "./major";
import {ICompany} from "./company";
export interface IPost {
    namePost ?: string;
    contents ?: string;
    major ?: IMajor;
    company ?: ICompany;
}

let PostSchema = new Schema<IPost>({
    namePost: String,
    contents: String,
    major : {
        type : Schema.Types.ObjectId,
        ref : 'Major'
    },
    company : {
        type : Schema.Types.ObjectId,
        ref : 'Company'
    }
});

let Post = model<IPost>('Post', PostSchema);
export {Post};