const express = require('express')
const router = express.Router();


//All app routes that need authentication


router.get('/',(req, res) => {
    return res.render('admin.ejs')
})

module.exports = router