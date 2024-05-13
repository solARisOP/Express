import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    },
    name: {
        type: String,
        required: [true, "Please enter name of the contact"]
    },

    email: {
        type: String,
        required: [true, "Please enter email of the contact"]
    },
    phone: {
        type: Number,
        required: [true, "Please enter phone number of the contact"]
    }
},
{
    timestamps: true,
})

export const contactsDB = mongoose.model("Contact", contactSchema);

