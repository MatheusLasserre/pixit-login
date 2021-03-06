const { signInUser } = require('../utils/users/users');
require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { verifyJwtLogin } = require('../middlewares/cookieJwtAuth');


//All login routes that doesn't need authentication



router.get('/', verifyJwtLogin, (req, res) => {
    return res.render('index.ejs')
});

router.post('/login', async (req, res) => {

    const user = {
        email: req.body.email,
        password: req.body.password
    };
    const storedUser = await signInUser(user);
    
    // if user exists, create token
    if (await storedUser) {
        console.log('Logado com sucesso.')
        const token = jwt.sign(storedUser, process.env.TOKEN_SECRET);

        // enable httpOnly for user security
        res.cookie("pixit_cookie", token, {
            httpOnly: true
        });

        return res.redirect('/admin');
    } else {
        // In case auth failed, ensure that there is no cookie and send back to login page
        res.clearCookie('pixit_cookie');
        console.log('Autenticação falhou')
        res.redirect('/')
    }

})

module.exports = router