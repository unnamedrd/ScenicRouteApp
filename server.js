const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const mongoose = require('mongoose')
const connectDB = require('./config/databse')
const fs = require('fs')


require('dotenv').config({ path: "./config/.env" });


connectDB();
//pull in router 



//middleware 