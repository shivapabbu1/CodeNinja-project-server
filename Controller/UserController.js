const Usermodel=require("../Models/Usermodel")

const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const key="qregdnfhd"

const signInController =async(req,res)=>{
    console.log(req.body)
    const {email,password,phone}=req.body;
     //validation
     
    if(!email){
        return res.send({message:"Email is required"})
    }
    if(!password){
        return res.send({message:"password is required"})
    }
    if(!phone){
        return res.send({message:"Mobile number is required"})
    }
    

    //checking user exists or not..
    const isUserExist=await Usermodel.findOne({email})

    if(isUserExist){
        res.status(400).send({msg:"user Already Exists.."});
        return;
    }

    const salt=await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password,salt);
    const newuser=new Usermodel({
       
        email:email,
        password:hashedpassword,
        phone:phone,
       
    }).save();
    console.log(newuser);

    res.send({msg:"User Registered successfully"});
}

const loginController = async(req,res) =>{
    const {email,password}=req.body;

    const isUserExist=await Usermodel.findOne({email});
    console.log(isUserExist);
    if(!isUserExist){
        res.status(400).send({msg:"Alredy email was used try another"});
        return;
    }
    const passwordMatch=await bcrypt.compare(password,isUserExist.password)
    

    console.log(passwordMatch);
    if(passwordMatch){
        res.status(200).send({msg:"Login was sucess.."});
        return;
    }
    if(!passwordMatch){
        res.status(400).send({msg:"Invalid credentials.. password was incorrect"});
        return;
    }

    const token=jwt.sign({id:isUserExist._id},key);
    console.log(token);
    return res.status(200).send({msg:"Login Successfull"},token);
}

module.exports={signInController,loginController}