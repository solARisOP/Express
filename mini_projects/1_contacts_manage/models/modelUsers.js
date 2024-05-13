import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        required: [true, "Please enter user username"]
    },
    email: {
        type: String,
        unique: [true, "Email address already taken"],
        required: [true, "Please enter user email"]
    },
    password: {
        type: String,
        required: [true, "Please enter user password"]
    },
},
{
    timestamps: true,
})

export const usersDB = mongoose.model("User", userSchema);