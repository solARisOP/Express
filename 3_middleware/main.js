import express from 'express'
import fs from "fs"
import {router as blog} from "./routes/blog.js"
import {router as shop} from "./routes/shop.js"
const app = express()
const port = 3000

// middleware 1
app.use((req, res, next)=>{
    req.nitish = "I am nitish";
    fs.appendFileSync("./logs.txt", `${Date.now()} is ${req.method}\n`)
    console.log("m1")
    next(); // this is for telling the request to go to the next middle ware or handeler, it is compulsory
})

// middleware 2
app.use('/blog', blog);
app.use('/shop', shop);

app.get('/', (req, res) => {
  res.send(`yeh area uska hai vo bolta hai ${req.nitish}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})