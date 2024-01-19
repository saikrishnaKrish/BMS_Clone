const { username, password } = require('../credentials');

// Construct MongoDB connection URL
const mongo_url = `mongodb+srv://${username}:${password}@cluster0.frkiogv.mongodb.net/?retryWrites=true&w=majority`;

console.log('MongoDB Connection URL:', mongo_url);

const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(mongo_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

// Event listeners for MongoDB connection events
const connection = mongoose.connection;

connection.on('connected', () => {
  console.log('Mongoose connected to MongoDB');
});

connection.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

connection.on('disconnected', () => {
  console.log('Mongoose disconnected from MongoDB');
});

// Handling application termination
process.on('SIGINT', () => {
  connection.close(() => {
    console.log('Mongoose connection disconnected through app termination');
    process.exit(0);
  });
});
