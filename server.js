const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const mongoose = require('mongoose')
const connectDB = require('./config/databse')
const fs = require('fs')
const multer = require("multer");


require('dotenv').config({ path: "./config/.env" });


connectDB();
//pull in router 

//middleware 




// Step 5 - set up multer for storing uploaded files




var upload = multer({ storage: storage });
