const express = require('express')
const app = express()
app.use(express.json())
const fileController = require("./controllers/file.controller")
app.use("/fileuploads", fileController)
module.exports = app;