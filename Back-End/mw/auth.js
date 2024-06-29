const jwt = require("jsonwebtoken");
const key = "issa"

const auth = async (req, res, next) => {
    // const Token = req.headers.cookie;
    // const auth = Token.split("=")[1].trim();
    try {
        const Token = req.headers.authorization
        if (!Token) {
            return res.status(402).json({ success: false, message: "You need to login first" })
        }


        const decodetoken = jwt.verify(Token, key)
        if (!decodetoken.user_id) {
            return res
                .status(403)
                .json({ success: false, message: "Unauthorized: User not found" });
        }

        req.user = decodetoken.user_id
        next()
    } catch (error) {
        console.error(error);
        return res
            .status(401)
            .json({ success: false, message: "Unauthorized: Invalid token" });

    }


}
module.exports = {
    auth
}