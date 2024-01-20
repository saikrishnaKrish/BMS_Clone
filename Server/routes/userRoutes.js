const router= require('express').Router();
const User = require('../models/userModel');
const Cars=require('../models/carModel');//for practise
const mongoose = require('mongoose');


//code will return response only after successful saving of user data into database
router.post('/register',async (req,res)=>{
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    console.log(req.body);
    const user = req.body;

    // Check if the user with the given email already exists within the transaction
    const existingUser = await User.findOne({ email: user.email }).session(session);

    if (existingUser) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({
        success: false,
        message: 'User with this email already exists in the database!',
      });
    }

    // Create a new user and save it to the database within the transaction
    await User.create([user], { session });

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    // Send success response
    res.status(201).json({
      success: true,
      message: 'User successfully registered!',
    });
  } catch (error) {
    // Handle errors and abort the transaction
    console.error(error);
    await session.abortTransaction();
    session.endSession();

    // Send error response
    res.status(500).json({
      success: false,
      message: `Internal Server Error ${error}`,
    });
  }
})


// router.post('/register', async (req, res) => {
//   try {
//     console.log(req.body);
//     const user = req.body;

//     // Check if the user with the given email already exists
//     const existingUser = await User.findOne({ email: user.email });

//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: 'User with this email already exists in the database!',
//       });
//     }

//     // Create a new user and save it to the database
//     await User.create(user);

//     res.status(201).json({
//       success: true,
//       message: 'User successfully registered!',
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       success: false,
//       message: 'Internal Server Error',
//     });
//   }
// });


router.get('/',(req,res)=>{
  res.status(200).send(`Hello from server`);
});

router.post('/',(req,res)=>{
   const car =req.body;
   const newCar= new Cars(car);
   newCar.save();

   res.status(201).send("successfully inserted record")
  });
exports.router = router;