import {Schema, model} from "mongoose";
import {IUser} from "./user";

export interface ICv {
    fileCv: string;
    editTime: string;
    idUser: IUser;
}

let CvSchema = new Schema<ICv>({
    fileCv : String,
    editTime: String,
    idUser : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

let Cv = model<ICv>('Cv', CvSchema);
export {Cv};
