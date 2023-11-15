require("dotenv").config()
const express = require("express")
const server = express()
const cors = require("cors")

server.use(express.json())

server.get("/hello", (req, res) => {
    res.send("Hello world!")
})

const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
	console.log(`SERVER <LISTENING>: PORT ${PORT}`)
})
