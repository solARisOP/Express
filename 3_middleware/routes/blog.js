import express from 'express'
export const router = express.Router()

router.use((req, res, next)=>{
    console.log("in blog");
    next();
})

router.get('/', (req, res) => {
    res.send('Hello blog!')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`welcome to blog post of ${req.params.slug}`)
})
