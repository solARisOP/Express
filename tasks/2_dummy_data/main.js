import mongoose from "mongoose"
import express from "express"
import {Todo} from "./models/Todo.js"

await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();

app.get("/", async (req, res)=>{
    await Todo.deleteMany({});
    for (let i = 0; i < 10; i++) {
        await Todo.create({
            name : "nitish",
            City : "kolkata",
            salary : 2400000,
            correct : true
        })
    }
    console.log(req.session)
    res.send("Done")
})

app.listen(3000, ()=>{})

