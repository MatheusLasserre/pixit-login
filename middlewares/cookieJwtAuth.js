const jwt = require('jsonwebtoken');

// Middleware to verify JWT auth and
// to persist user data through pages
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

function verifyJwtLogin(req, res, next) {
    const token = req.cookies.pixit_cookie;

    try {
        const user = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = user;
        return res.redirect('/admin')
        
    } catch (error) {
        next();
    }
}

module.exports = {verifyJwt, verifyJwtLogin };