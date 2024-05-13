import mongoose from "mongoose"

const TodoSchema = mongoose.Schema({
    name : String,
    City : String,
    salary : Number,
    correct : Boolean
})

export const Todo = mongoose.model('cotton', TodoSchema); 