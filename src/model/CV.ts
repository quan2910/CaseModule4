import {Schema, model} from "mongoose";
import {IUser} from "./user";

export interface ICv {
    fileCv: string;
    editTime: string;
}

let CvSchema = new Schema<ICv>({
    fileCv : String,
    editTime: String,
});

let Cv = model<ICv>('Cv', CvSchema);
export {Cv};