import mongoose ,{Schema} from 'mongoose'

const commentSchema=new Schema({

    blog:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog",
        required:true 
    },
    name:{
        type:string ,
        required:true 
    },
    content:{
        type:String ,
        required:true 
    },
    isApproved:{
        type:Boolean,
        required:true 
    }
},{timestamps:true })

const Comment=mongoose.model("Comment",commentSchema)

export default Comment 

