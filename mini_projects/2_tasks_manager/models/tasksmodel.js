import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    name : {
        type: String,
        required : [true, "name field is mandatory"],
        maxlength : [20, "name field cannot exceed 20 characters"],
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    }
})

export const taskModel = mongoose.model('task', taskSchema);