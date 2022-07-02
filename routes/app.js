const express = require('express')
const router = express.Router();


//All app routes that doesn't need authentication


router.get('/',(req, res) => {
    return res.send({
        message:'Hello World'
    })
})

module.exports = router