import jwt from 'jsonwebtoken'
import Blog from '../models/Blog';


export const adminLogin=async(req,res)=>{
    try{

        const {email,password}=req.body ;

        if(email!==process.env.ADMIN_EMAIL || password!==process.env.ADMIN_PASSWORD){
            return res.status(401).json({success:false,message:"Invalid credentails"})
        }

        const token=jwt.sign({email},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})

        return res.status(200).json({success:true,message:"admin login successful",token})
    }catch(err){
        return res.status(500).json({success:false,message:err.message})
    }
}

export const getAllBlogsAdmin=async(req,res)=>{

    try{
         const blogs=await Blog.find({}).sort({createdAt:-1})
         res.status(200).json({success:true,message:"all blogs fetched successfully",blogs})
    }catch(err){
        res.status(500).json({success:false,message:err.message})
    }
}


export const getAllCommentsAdmin=async(req,res)=>{

    try{
         const comments=await Blog.find({}).populate("blog").sort({createAt:-1})

         res.status(200).json({success:true,comments})

    }catch(err){
            res.status(500).json({success:false,message:err.message})
    }   
}

export const getDashboard=async(req,res)=>{
    
}