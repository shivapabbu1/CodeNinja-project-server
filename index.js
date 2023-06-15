const express=require("express")
const app=express()
const cors=require("cors")
const userroute=require("./Routes/user")

const connection=require("./DataBase/db.js")
const mongoose=require("mongoose")


app.use(express.json());
app.use(express.urlencoded({extended:true}));
//middlewares
app.use(cors({origin:"*"}));

app.use(userroute)

app.get("/",(req,res)=>{
    res.send("welcome to coding ninjas backend sever application");
    console.log("welcome to coding ninjas backend sever application")
})

app.listen(4000,async()=>{
   console.log("sucessfully server on port number 4000");
   await connection()
})