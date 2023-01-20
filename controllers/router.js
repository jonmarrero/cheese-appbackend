// import dependies - these are my tools to build this thing 
const { application } = require("express")
const express = require("express")

// unpacked my tools and told it to get to work 
const Router = express.Router()

//routes 
Router.get("/", (req, res) => {
    res.send("The tools are working")
})

module.exports = Router  