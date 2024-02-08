const router = require('express').Router();
const showModal =  require('../models/showModal');


router.get('/add',async (req,res)=>{
    try{
       const show = new showModal(req.body);
       await show.save();
       res.status(201).json({
        success:true,
        message:"Show added!"
       })
    }catch(error){
        res.send({
            success:false,
            message:"Internal Server Error"
         })
    }
})

router.get('/getAllShowsByTheatreId/:theatreId',async (req,res)=>{
      try{
       const theatreId = req.params.theatreId;
       const shows = await showModal.find({theatre:theatreId}).populate('movie');
       res.send({
        success:true,
        message:'show fetched successfully',
        data:shows
         })
      }
      catch(error){
        res.send({
            success:false,
            message:"Internal Server Error"
         })
      }
})

router.post('/delete',async (req,res)=>{
      try{
            await showModal.findByIdAndDelete(req.body.showId);
            res.send({success:true,message:'Show deleted Successfully!'})
      }catch(error){
         res.send({
            success:false,
            message:"Something went wrong!"
         })
      }
})


router.post('/getShowById',async(req,res)=>{
   try{
         const show = await showModal.findById(req.body.showId)
         .populate("movie")
         .populate("theatre");

         res.send({
            success:true,
            message:"Show fetched",
            data:show
         })
   }
   catch(error){
      res.send({
         success:false,
         message:error.message
      })
   }


})
exports.router = router