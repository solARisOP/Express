const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static('public'))
app.use("/blog", blog)
app.use("/shop", shop)

app.route('/').get((req, res) => {
  res.send('Hello World!')
}).post((req, res) => {
    res.send('Posted sucessfully')
}).put((req, res) => {
    res.send('Puted sucessfully')
})

app.get('/index', (req, res) =>{
    res.sendFile("/templates/index.html", {root : __dirname})
})

app.get('/api', (req, res) =>{
    res.json({1: "root", 2:"we"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})