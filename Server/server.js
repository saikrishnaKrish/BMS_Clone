const express = require('express');
require('dotenv').config();

const app = express();
const dbConfig=require('./DBConfig/dbconfig');


const userRoutes = require('./routes/userRoutes');
const bottleRoutes = require('./routes/bottleRoutes');

//Middlewares
app.use(express.json())

//Routes
app.use('/api/users',userRoutes.router);
app.use('/api/bottles',bottleRoutes.router);


const PORT=8080;
app.listen(PORT,()=>console.log(`connected to server`,PORT));
