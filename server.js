require("dotenv").config()
const express = require("express")
const server = express()
const cors = require("cors")
const cookieParser = require("cookie-parser")

server.use(express.json())
server.use(cookieParser())

const authRouter = require("./routes/authRouter")

server.use("/v1/auth", authRouter)

const PORT = process.env.PORT || 8000
server.listen(PORT, () => {
	console.log(`SERVER <LISTENING>: PORT ${PORT}`)
})
