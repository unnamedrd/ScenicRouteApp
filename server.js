const cors = require('cors');
const express = require('express')
const app = express()
//const bodyParser = require('body-parser')
const multer = require('multer')
const mongoose = require('mongoose')
const connectDB = require('./config/databse')
const fs = require('fs')
const multer = require("multer");

//pull in router 
const initRoutes = require('./routes')

require('dotenv').config({ path: "./config/.env" });


connectDB();


var corsOptions = {
  origin: "http://localhost:8081",
};


//middleware 
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
initRoutes(app);

app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});



// Step 5 - set up multer for storing uploaded files




var upload = multer({ storage: storage });
