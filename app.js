const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/connectDB');

// REST Object
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan());

// Database Connection
connectDB();

//app Routes
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Node Server"
    })
})

module.exports = app;