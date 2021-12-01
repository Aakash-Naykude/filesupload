const File = require("../models/file.model")
const express = require("express")
const router = express.Router()
const multer  = require('multer')
router.post("/", middle, async (req, res)=>{
    try{
        const file 
    } catch(e){
        return res.status(500).json({message: e.message, Status:"Failed"})
    }
})

module.exports = router