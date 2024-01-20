const router= require('express').Router();
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');



router.post('/register',async (req,res)=>{
    try{
        const userDetails= req.body;
        const checkExists = await userModel.findOne({email:userDetails.email})
   
        if(checkExists){
          return res.status(400).json({success:false,message:'user already exists'});
        }
    
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userDetails.password,salt);

        const newUser=new userModel({...userDetails,password:hashedPassword});
        
        newUser.save();
    
       return res.status(200).json({
            success:true,
            message:'User successfully registered'
        })        
    }
    catch(err){
        console.log('Internal server error',err.message);
        return res.status(500).json({success:true,message:'Internal server error'})
    }
})

router.post('/login',async (req,res)=>{
    console.log(req.body)
    try{
        const userDetails = await userModel.findOne({email:req.body.email});
    if(!userDetails){
        return res.status(400).json({
            success:false,
            message:'User does not exist'
        })
    }
    console.log(userDetails.password)
    console.log(req.body.password)
    const isValidPassword = await bcrypt.compare(req.body.password,userDetails.password);

    if(!isValidPassword){
        return res.status(400).json({success:false,message:"password is incorrect"})
    }

        return res.status(200).json({success:true,message:'successfully logged in!'})
    }
    catch(err) {
        console.log(err.message)
        return res.status(500).json({success:true,message:'Internal server error'})
    }
})

router.get('/',(req,res)=>{
    return res.status(200).send('Hello from server');
})

exports.router = router;