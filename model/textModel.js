const mongoose = require('mongoose')
const Schema = mongoose.Schema
const textSchema = new Schema({
    text:{type:String,require:true},
    lang : {type:String,enum:['Python','Java','C'],require:true},
    fname : {type : String,require:true}
})

module.exports=mongoose.model('text',textSchema)