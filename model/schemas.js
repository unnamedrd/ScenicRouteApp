const mongoose = require('mongoose')

let parkSchema = new mongoose.Schema({
    name: { type: String, require: true }, 
    desc:{type:String, require:true}, 
    image: { data:buffer, type:String }
})

module.exports = new mongoose.model('national-park', parkSchema)
