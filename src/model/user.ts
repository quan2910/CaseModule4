import {Schema, model} from "mongoose";

export interface IUser {
    username ?: string;
    password ?: string;
    cv ?: string
}

let UserSchema = new Schema<IUser>({
    username: String,
    password: String,
    cv: String
});


let User = model<IUser>('User', UserSchema);
export {User};