import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User';


export const registerUser=async(req,res)=>{

    try{
         const {email,password,name}=req.body ;
         let existingUser=await User.findOne({email})

         if(existingUser){
            return res.status(400).json({success:false,message:"user with this email already exists"})
         }

         const salt=await bcrypt.genSalt(10)

         const hashPass=await bcrypt.hash(password,salt)

         const newUser=await  User.create({
            name:name,email:email,
            password:hashPass
         })

         return res.status(200).json({success:true,message:"user registered successfully",user:newUser})

    }catch(err){
        console.log(err)
        return res.status(500).json({success:false,message:err.message})

    }
}

export const loginUser=async(req,res)=>{
    try{

        const {email,password}=req.body ;
        const user=await User.findOne({email})

        if(!user){
            return res.status(400).json({success:false,message:"invalid credentials either email or password is wrong"})
        }

        const isMatchPass=await bcrypt.compare(password,user.password)

        if(!isMatchPass){
            return res.status(400).json({success:false,message:"invalid email or password"})
        }
        // const token=jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn:"1d"})
        const token=jwt.sign({email},process.env.JWT_SECRET_KEY,{expiresIn:"1d"} )

        return res.status(200).json({success:true,message:'login successfully',token})

    }catch(err){
        return res.status(500).json({success:false,message:err.message})
    }
}

