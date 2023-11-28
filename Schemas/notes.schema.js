import mongoose from "mongoose";
import { Schema , model } from "mongoose";


 const schema  = new Schema({
    notes_name :{
        type : String,
        required:true
    },
    notes_description :{
        type:String,
        required :true
    }
 })

 export  const notesSchema = model("Notes" , schema) 