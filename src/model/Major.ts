import {Schema, model} from "mongoose";
export interface IMajor {
    majorName ?: string;
}

let MajorSchema = new Schema<IMajor>({
    majorName: String,
});

let Major = model<IMajor>('Major', MajorSchema);
export {Major};