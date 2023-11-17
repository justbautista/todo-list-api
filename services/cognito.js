const axios = require("axios")

const exchangeCodeForTokens = async (code) => {
	const tokenEndpoint = process.env.COGNITO_TOKEN_ENDPOINT
	const data = {
		grant_type: "authorization_code",
		client_id: process.env.COGNITO_CLIENT_ID,
		code: code,
		redirect_uri: "http://localhost:3000",
	}

    try {
        const response = await axios.post(tokenEndpoint, new URLSearchParams(data))
        return response
    } catch (err) {
        console.log("exhange", err)
        return err
    }
}

module.exports = { exchangeCodeForTokens }
