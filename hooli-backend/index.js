const express = require('express');
const app = express()
const port = 4000;
const mongoose = require("mongoose")
const { mongoUrl } = require("./keys")
require('./models/model')
const auth = require("./routes/auth")
const cors = require("cors")

app.use(cors())
mongoose.connect(mongoUrl)
app.use(express.json())
app.use(auth)

mongoose.connection.on("connected", () =>{
  console.log('MongoDB Connected')
})
mongoose.connection.on("error", () =>{
  console.log('MongoDB Not Connected')
})
app.listen(port,() =>{
  console.log('server is running on port 4000')
})


