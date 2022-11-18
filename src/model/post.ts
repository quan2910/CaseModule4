import {Schema, model} from "mongoose";
export interface IPost {
    namePost ?: string;
    contents ?: string;
}

let PostSchema = new Schema<IPost>({
    namePost: String,
    contents: String
});

let Post = model<IPost>('Post', PostSchema);
export {Post};