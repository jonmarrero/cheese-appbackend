// import dependencies - this means i am gathering all my tools together to build this thing 
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
require("dotenv").config()
const Router = require("./controllers/router")


// create the application - this is my work area 
// express is used to make the foundation 
const app = express()

// this is where i'm going to use my middleware - this allows me to USE my tools 
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use("/cheese", Router)

// now i create my routes in order of "induces" 
// induces = (index, new, delete, update, create, edit, show)
app.get("/", (req, res) => {
    res.send("I'm almost a Full Stack Software Engineer") 
})


// the server needs to know where it is getting its commands from 
const PORT = process.env.PORT 
app.listen(PORT, (req, res) => {
    console.log(`my app is running on ${PORT}`)
})