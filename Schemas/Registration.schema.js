import mongoose, { Mongoose, trusted } from "mongoose";
import { Schema , model } from "mongoose";

const schema = new Schema({
    name:{
        type:String ,
        required :true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    }
})

export  const registerSchema = model("register" , schema) 