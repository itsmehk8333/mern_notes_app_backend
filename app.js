import express from 'express';
import mongoose from 'mongoose';
import { notesRouter } from './Services/notes.service.js';
import cors from 'cors'
import { authRouter } from './Services/Authenication.Service.js';
import { registerRouter } from './Services/Register.Service.js';
import { verfiyToken } from './middilewares/verifyToken.js';

const app = express();
const MONGO_URI = "mongodb://localhost:27017/notesapp";
const PORT = process.env.API_PORT || 4000


const connection = mongoose.connect(MONGO_URI)
app.use(express.urlencoded({ extended: true }));
mongoose.connection.once("open", () => {
  console.log("db connected")
})
app.use(cors())
app.use(express.json());

app.use("/login" , authRouter)
app.use("/register", registerRouter)
app.use("/",verfiyToken ,  notesRouter)


//  console.log(process.env.PORT)
app.listen(PORT, () => {
  console.log(`server running at  ${PORT}`)
})