import {Schema, model} from "mongoose";
export interface ICompany {
    companyName ?: string;
    password ?: string;
}

let CompanySchema = new Schema<ICompany>({
    companyName: String,
    password: String
});

let Company = model<ICompany>('Company', CompanySchema);
export {Company};