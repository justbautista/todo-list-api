const { exchangeCodeForTokens } = require("../services/cognito")

const getTokens = async (req, res) => {
	const { code } = req.query

	try {
		const tokens = await exchangeCodeForTokens(code)
		res.cookie("access_token", tokens["access_token"], {
			httpOnly: true,
			sameSite: "Strict",
		})
		res.cookie("refresh_token", tokens["refresh_token"], {
			httpOnly: true,
			sameSite: "Strict",
		})
		res.send("SUCCESS")
	} catch (err) {
		res.send(err)
	}
}

module.exports = { getTokens }
