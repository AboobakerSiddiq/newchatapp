var mongoose=require("mongoose");

const chatSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    date:{
        type:String
    }
},{timestamps:true})

module.exports=mongoose.model("Chat",chatSchema)