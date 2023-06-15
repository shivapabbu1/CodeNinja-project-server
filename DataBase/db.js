const mongoose=require("mongoose")

const ConnectToDb= async()=>{
    try{
        const dbconnection = await mongoose.connect("mongodb+srv://shiva_pabbu1:99999@cluster0.aaitgpp.mongodb.net/Coding-ninja?retryWrites=true&w=majority");
        console.log("Connected to Mongodb Database");
    }
    catch(error){
        console.log(`Error in Mongo db ${error}`);
    }
}
module.exports=ConnectToDb