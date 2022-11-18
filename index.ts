import express from "express";
import {router} from "./src/router/router";
import mongoose from "mongoose";
import cors from "cors"

const DB_URL = 'mongodb://127.0.0.1:27017/case2_MD4';
mongoose.connect(DB_URL).then(()=>{
    console.log(' db connected')
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(cors());
app.use(express.json());
app.use('',router);
app.listen(3000,()=>{
    console.log("server is running")
})