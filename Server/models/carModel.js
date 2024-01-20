const mongoose=require('mongoose');

const carSchema=mongoose.Schema({
    name:{type:String,required:true,default:'Benz'},
    color:{type:String,required:true,default:'Black'},
    vehicleType:{type:String,required:true,default:'Petrol'},
    price:{type:Number,default:0.00}
})

module.exports=mongoose.model("CarsData",carSchema)