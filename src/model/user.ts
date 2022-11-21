import {Schema, model} from "mongoose";
import {ICv} from "./CV";
export interface IUser {
    username ?: string;
    password ?: string;
    cv ?: ICv
}

let UserSchema = new Schema<IUser>({
    username: String,
    password: String,
    cv : {
        type : Schema.Types.ObjectId,
        ref : 'Cv'
    }
});

let User = model<IUser>('User', UserSchema);
export {User};