import jwt from 'jsonwebtoken'

export const verfiyToken = function(req, res, next){
    // console.log("htting token", req.header("Authorization"))
    if(req.header("Authorization")){

          const token  = req.header("Authorization").split(' ').reverse();
           console.log(token[0])
              const result  =  jwt.verify(token[0], "I'm Batman" , 
              (err) =>{
                 console.log(err)
                if(err){
                    res.json({
                        success:false ,
                        "message" :'unautorized'
                    })
                }
                else{
                     next()
                }
              }
              ) ;
              
           
    }
    else{
        res.json({success :false,
        "message" : "unauthorized user"}
        )
    }
}
