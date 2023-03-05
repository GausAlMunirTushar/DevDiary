const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = () => {
    mongoose.connect(MONGO_URI)
    .then(
        console.log(`Connected to MongoDB`)
    ).catch((err) => {
        console.log(err)
    })

    
}

module.exports = connectDB;