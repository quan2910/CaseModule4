import {Schema, model} from "mongoose";
export interface IUser {
    username ?: string;
    password ?: string;
}

let UserSchema = new Schema<IUser>({
    username: String,
    password: String
});

let User = model<IUser>('User', UserSchema);
export {User};