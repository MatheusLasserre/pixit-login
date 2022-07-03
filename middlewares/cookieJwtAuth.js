const jwt = require('jsonwebtoken');

// Middleware to verify JWT auth and
// to persist user data
function verifyJwt(req, res, next) {
    const token = req.cookies.pixit_cookie;

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        next();
    } catch (error) {
        res.clearCookie("pixit_cookie");
        return res.redirect('/');
    }
}

module.exports = verifyJwt;