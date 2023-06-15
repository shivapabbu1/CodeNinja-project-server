const express=require("express")

const router=express.Router()

const { signInController, loginController }  =require("../Controller/UserController")

router.post("/register",signInController);
router.post("/login",loginController);
module.exports=router;