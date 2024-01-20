const express = require('express');
require('dotenv').config();

const app = express();
const dbConfig=require('./DBConfig/dbconfig');


const userRoutes = require('./routes/userRoutes');

//Middlewares
app.use(express.json())

//Routes
app.use('/api/users',userRoutes.router);


const PORT=8080;
app.listen(PORT,()=>console.log(`connected to server`,PORT));
