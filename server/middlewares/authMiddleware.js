import jwt from 'jsonwebtoken'

const auth=(req,res,next)=>{

    const token=req.headers.authorization

    try{
        if(!token){
            return res.status(401).json({success:false,message:"token not found"})
        }

        const decoded=jwt.verify(token,process.env.JWT_SECRET_KEY)

        req.user=decoded

        next()

        // jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{        
        //     if(err){
        //         return res.status(401).json({success:false,message:"invalid token"})
        //     }
        //     req.user=decoded
        //     next()
        // })

    }catch(err){
       return  res.status(500).json({success:false,message:"invalid token"})
    }
}

export default auth ;