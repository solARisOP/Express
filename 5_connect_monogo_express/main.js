import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

await mongoose.connect("mongodb://localhost:27017/todo")
const app = express();
const port = 3000;

app.get('/', async (req, res)=>{
    const todo = new Todo({title : "hey mt first todo", desc : "Description of this todo", isDone : false})
    todo.save();
    let x = await Todo.findOne({title : "hey mt first todo"})
    res.json({title : x.title, desc : x.desc, isDone : x.isDone});
})

app.listen(port, ()=>{
    console.log(`listening to the ${port}`);
})
