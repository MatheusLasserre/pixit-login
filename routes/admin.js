const express = require('express');
const {verifyJwt} = require('../middlewares/cookieJwtAuth');
const router = express.Router();


//All app routes that need authentication


router.get('/', verifyJwt,(req, res) => {
    // passing user info from jwt to render function
    return res.render('admin.ejs', {user: req.user});
});

router.get('/logout',(req, res) => {
    res.clearCookie("pixit_cookie");
    return res.redirect('/')
});


module.exports = router