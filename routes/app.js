const express = require('express')
const router = express.Router();


//All app routes that doesn't need authentication


router.get('/',(req, res) => {
    return res.render('index.ejs')
})

module.exports = router