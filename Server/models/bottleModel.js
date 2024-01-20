const mongoose = require('mongoose');

const bottleSchema = mongoose.Schema({
    BType:{type:String,required:true},
    Bcolor:{type:String},
    Bprice:{type:Number},
    BMfrName:{type:String,required:true}
})

module.exports = mongoose.model('Bottles',bottleSchema);