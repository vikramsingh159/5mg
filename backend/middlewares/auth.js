const jwt = require("jsonwebtoken");
require("dotenv").config();
const authantication = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        const decoded = jwt.verify(token, process.env.SECRET_JWT);
        if (decoded) {
            const userID = decoded.userID;
            console.log(decoded);
            req.body.userID = userID;
            next();
        } else {
            res.send("Please Login first");
        }
    } else {
        res.send("Please Login first");
    }
};

module.exports = {
    authantication,
};
