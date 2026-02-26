import mongoose from 'mongoose'

const connectDb=async()=>{

    try{
        mongoose.connection.on("connected",()=>console.log('database connected'))

        await mongoose.connect(`${process.env.MONGODB_URI}/quickBlog`)
    }catch(err){
        console.log("database connection unsuccessful",err.message)
    }
}

export default connectDb