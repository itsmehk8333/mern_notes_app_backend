import jwt from "jsonwebtoken";
import express from 'express'
import { registerSchema } from "../Schemas/Registration.schema.js";


export const authRouter = express.Router()

authRouter.post("/", async (req, res) => {

    try {
        console.log(req.body)

        let data = await registerSchema.findOne({ "username": req.body.name });
        if (data != null) {
            if (data.password == req.body.password) {

                const user = {
                    "name": req.body.user_name,
                    "password": req.body.password
                }

                jwt.sign({ user }, "I'm Batman", (err, token) => {
                    res.json({ 
                        "success":true,
                        "token" : token })
                })
            }else{
                res.json({
                    success:false,
                    message:"Invalid Credentials"
                })
            }
        }else{
            res.json({
                "success":true,
                data : "username not found!!"
            })
        }
        // console.log(data)

    } catch (error) {
        console.log(error)
    }
})