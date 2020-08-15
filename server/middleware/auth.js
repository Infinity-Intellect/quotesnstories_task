const jwt = require('jsonwebtoken')

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, data) => {
            if (err) {
                console.log(err)
                return res.status(403).send("Unidentified user")
            }
            req.userData = data
            next()
        })
    }
    else {
        return res.status(401).send("No authentication header")
    }
}
module.exports = authenticateJWT