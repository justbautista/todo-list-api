const express = require("express")
const router = express.Router()
const { getTokens } = require("../controllers/authControllers")

router.get("/tokens", getTokens)

module.exports = router