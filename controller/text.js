//const { response } = require('express')
const Text = require('../model/textModel')
const codify = async(req,res)=> {
    const {text} = req.body
    const getText = new Text({
       text 
    })
    await getText.save()
    return res.status(200).json({getText,msg:'Successfully'})
}
module.exports = {codify}