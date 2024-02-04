const router = require("express").Router();
const theatreModel = require("../models/theatreModel");

router.post("/add", async (req, res) => {
  try {
    const theatre = await theatreModel(req.body);
    await theatre.save();
    res.status(201).json({
      success: true,
      message: "Theatre Created",
    });
  } catch (error) {
    console.log("error occurred", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server occurred",
    });
  }
});

router.get("/getAllTheatresByOwnerId/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const theatesList = await theatreModel.find({ owner: userId });
    return res.status(200).json({
        success:true,
        message:'Theatres fetched successfully',
        data:theatesList
    })
  } catch (error) {
    console.log("error occurred", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server occurred",
    });
  }
});

router.get('/getAllTheatres',async (req,res)=>{
  try {
        const theatres =await theatreModel.find().populate('owner')
         return res.send({
          success:true,
          message:"Theatres fetched Successfully"
         })
  } 
  catch(error){
    return res.send({
      success:false,
      message:"something went wrong",
      data:error
    })
  }

})

router.delete("/delete",async (req,res)=>{
    try{
        const theatreId = req.params.id;
       await theatreModel.findByIdAndDelete(theatreId);
       return res.status(200).json({
        success:true,
        message:'Theatre deleted successfully'
       }) 
    }
    catch (error) {
        console.log("error occurred", error);
        return res.status(500).json({
          success: false,
          message: "Internal Server occurred",
        });
    }
})

router.put('/update',async (req,res)=>{
    try{
        await theatreModel.findByIdAndUpdate(req.body.theatreId,req.body)
        return res.status(200).json({
            success:true,
            message:'Theatre updated successfully'
           }) 
    }
    catch (error) {
        console.log("error occurred", error);
        return res.status(500).json({
          success: false,
          message: "Internal Server occurred",
        });
    }
})

exports.router = router