import express from 'express';
import { registerSchema } from '../Schemas/Registration.schema.js';



export const registerRouter = express.Router();


registerRouter.post("/", async (req, res) => {

    const { name, password, email, username } = req.body;


    const duplicateUsername = await registerSchema.findOne({ "username": username });
    console.log(duplicateUsername, "duplicateusername")

    if (duplicateUsername == null) {
        const data = new registerSchema({
            name: name,
            password: password,
            email: email,
            username: username
        })

        const saveData = await data.save()

        res.json({
            success: true,
            "message": "registration successfull!!!"
        })
    } else {
        res.json({
            success: false,
            "message": "username not avialble!!"
        })
    }


})




