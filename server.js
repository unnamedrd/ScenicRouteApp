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

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('view engine', 'ejs')


// Step 5 - set up multer for storing uploaded files



var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		cb(null, file.fieldname + '-' + Date.now())
	}
});

var upload = multer({ storage: storage });
