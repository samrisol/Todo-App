require('dotenv').config();
const mongoose = require('mongoose');

const connection = mongoose
  .createConnection(process.env.MONGO_URI_ATLAS)
  .on('open', () => {
    console.log('MongoDB Connected');
  })
  .on('error', (err) => {
    console.log('MongoDB Connection error', err);
  });

module.exports = connection;
