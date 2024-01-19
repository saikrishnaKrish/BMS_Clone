const {username,password}=require('../cridentials')
const mongo_url=`mongodb+srv://${username}:${password}@cluster0.frkiogv.mongodb.net/?retryWrites=true&w=majority`;

console.log(mongo_url)

const mongoose = require('mongoose');
mongoose.connect(mongo_url)
.then(()=>console.log('connected to mongodb'))
.catch(()=>console.log('unable to connect to DB'))