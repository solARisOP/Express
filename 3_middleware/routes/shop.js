import express from 'express'
export const router  = express.Router();

router.use((req, res, next)=>{
    console.log("in shop");
    next();
})

router.get('/', (req, res) => {
    res.send('Hello shops!')
})

router.get('/shopper/:slug', (req, res) => {
    res.send(`welcome to shop of ${req.params.slug}`)
})
