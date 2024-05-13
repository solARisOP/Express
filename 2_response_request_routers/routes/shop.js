const express = require('express')
const router  = express.Router();

router.get('/', (req, res) => {
    res.send('Hello shops!')
})

router.get('/shopper/:slug', (req, res) => {
    res.send(`welcome to shop of ${req.params.slug}`)
})

module.exports = router;