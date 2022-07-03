const express = require('express');
const verifyJwt = require('../middlewares/cookieJwtAuth');
const { createuser } = require('../utils/users/users');
const router = express.Router();


//All app routes that need authentication


router.get('/', verifyJwt,(req, res) => {
    // passing user info from jwt to render function
    return res.render('admin.ejs', {user: req.user});
});


module.exports = router