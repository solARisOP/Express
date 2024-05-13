const express = require('express')
const router  = express.Router();

router.get('/', (req, res) => {
    res.send('Hello blog!')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`welcome to blog post of ${req.params.slug}`)
})

module.exports = router;