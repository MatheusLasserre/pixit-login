const { signInUser } = require('../utils/users/users');
require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');


//All login routes that doesn't need authentication



router.get('/',(req, res) => {
    return res.render('index.ejs')
});

router.post('/login', async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    const storedUser = await signInUser(user);
    // console.log(storedUser)
    if(await storedUser){
        console.log('Logado com sucesso.')
        const token = jwt.sign(storedUser, process.env.TOKEN_SECRET);
        
        res.cookie("pixit_cookie", token, {
            httpOnly: true
        });

        return res.redirect('/admin');
    }else{
        console.log('Autenticação falhou')
        res.redirect('/')
    }

})

module.exports = router