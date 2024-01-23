const router = require('express').Router();
const movieSchema = require('../models/movieModel');

router.post("/add",async (req,res)=>{
    try { 
            const movieModel = new movieSchema(req.body)
            await movieModel.save();
            res.status(201).json({
                success:true,
                message:'Movie created Successfully!'
            })
    }
    catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:'Internal Server error'
        })
    }
})

express.router = router