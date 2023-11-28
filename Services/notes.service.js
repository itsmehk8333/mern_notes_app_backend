import express from 'express' ;
import { notesSchema } from '../Schemas/notes.schema.js';


export const notesRouter = express.Router() ;

notesRouter.post("/", async(req, res) =>{
    try {
         console.log(req.body)
            const data = new notesSchema({
        notes_name :req.body.notes_name,
        notes_description : req.body.notes_description
    })

    
    const notesData = await data.save();
         res.send({
          "success" : true ,
          "data": notesData
         })
    } catch (error) {
         res.send(error)
    }
})

notesRouter.get("/" , async(req, res) =>{
    try{

    var data = await notesSchema.find();
     res.send(
          {
          "success" :true,
          "data" : data
          }
     )
    }
    catch(error){
         res.send(error)
    }
})

notesRouter.delete("/:id", async(req, res) =>{
      console.log(req.params)
     try { 
               let data = await notesSchema.deleteOne({_id:req.params.id});
               res.json(data)
          
     } catch (error) {
          console.log(error)
     }
})


notesRouter.put("/" , async(req, res) => {
     try {
           console.log(req.body)
          
          let data  =  await notesSchema.findOneAndUpdate({_id :req.body.id} , {notes_name:req.body.notes_name ,
               notes_description : req.body.notes_description} , { new: true    }) ;
                res.send(
                    {
                    "success" : true,
                    "data" : data  
               }
               )
     } catch (error) {
           console.log(error)
     }
})
// notesRouter.post("/" , async(req, res) =>{
//     //  console.log(req.body)


//     res.send(req)
    
// })
