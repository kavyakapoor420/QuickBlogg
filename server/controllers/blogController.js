import fs from 'fs'
import imageKit from '../configs/imageKit.js'
import Blog from '../models/Blog.js'


export const addBlog=async(req,res)=>{

    try{
         const {title,subTitle,description,category,isPublished}=JSON.parse(req.body.blog)
         const imageFile=req.file 

         // check if all fields are present or not 
         if(!title || !subTitle | !description || !category || !imageFile){
            return res.status(400).json({success:false,message:"missing required fields "})
         }

         const fileBuffer=fs.readFileSync(imageFile.path)

         // upload image to imageKit 
         const response=await imageKit.upload({
            file:fileBuffer ,
            fileName:imageFile.originalname,
            folder:'/blogs'
         })

         /// optimization thorugh imageKit URL tranformation c
         const optimizedImageUrl=imageKit.url({
            path:response.filePath,
            transformation:[
                {"quality":"auto"}, // auto compression 
                {format:"webp"},    // convert to modern format 
                {width:"1280"}      // width resize 
            ]
         })

         const image=optimizedImageUrl ;

         await Blog.create({title,subtitle,description,category,image,isPublished})

         return res.status(200).json({success:true,message:err.message})

    }catch(err){
        res.status(500).json({success:false,message:err.message})
        console.log(err)
    }
}

export const getAllBlogs=async(req,res)=>{

    try{
         const blogs=await Blog.find({isPublished:true}).sort({createdAt:-1})

         res.status(200).json({success:true,message:err.message})

    }catch(err){
         res.status(500).json({success:false,message:err.message})
    }
}

export const getBlogById=async(req,res)=>{

    try{
         const  {blogId}=req.params ;
         const blog=await Blog.findById(blogId)

         if(!blog){
            return res.status(404).json({success:false,message:'blog not found'})
         }

         res.status(200).json({success:true,blog})
    }catch(err){
         res.status(500).json({success:false,message:err.message})
    }
}