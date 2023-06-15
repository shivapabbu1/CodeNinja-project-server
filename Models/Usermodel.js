const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
   
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }, phone:{
        type:String,
        required:true
    }
})
const Usermodel=mongoose.model("Userdata",UserSchema)

module.exports=Usermodel