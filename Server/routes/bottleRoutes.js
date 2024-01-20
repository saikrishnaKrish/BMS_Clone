const router = require('express').Router();
const bottles = require('../models/bottleModel');//for practise


router.get('/getBottlesList',(req,res)=>{
    res.status(200).send('Hi from bottles Routes');
})

router.post('/addBottle',async(req,res)=>{
        try{
            const bottleData= req.body;

            const newBottle=new bottles(bottleData);
            const savedData=await newBottle.save();
             return res.status(201).send('saved bottle data '+savedData);
        } catch(err) {
            console.log('error occured',err);
            return res.status(400).send('unable to process the request '+ err.message)
        }
   
})


exports.router=router;

