const express = require('express');
require('dotenv').config();

const app = express();
const dbConfig = require('./DBConfig/dbconfig');
const userRoutes = require('./routes/userRoutes');
const movieRoutes = require('./routes/movieRoute');
const theatreRoutes = require('./routes/theatreRoute');

// Middlewares
app.use(express.json());

// Routes
app.use('/api/users', userRoutes.router);
app.use('/api/movies', movieRoutes.router);
app.use('/api/theatre',theatreRoutes.router);

// Use 3000 as a default if PORT is not defined
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Connected to server on port ${port}`));
