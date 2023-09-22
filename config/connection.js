const mongoose = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/FriendsDB';

async function connectToDatabase() {
  try {
    await mongoose.connect(connectionString);
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1); // Exit the process on connection error
  }
}

connectToDatabase(); // Connect to the database on application startup

module.exports = mongoose.connection;
