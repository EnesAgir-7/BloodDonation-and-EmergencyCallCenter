const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

dotenv.config({path:'./config/config.env'})

// console.log(process.env.MONGO_URI);

// // connect to database
// connectDB();

const app= express();

const PORT = process.nextTick.PORT || 5000;

app.listen(PORT,() => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))