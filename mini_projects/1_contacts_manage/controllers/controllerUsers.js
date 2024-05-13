import { usersDB } from "../models/modelUsers.js";
import bcrypt from "bcrypt";
import expressAsyncHandler from "express-async-handler";
import jsonwebtoken from "jsonwebtoken"

const jwt = jsonwebtoken;
const asyncHandeller = expressAsyncHandler

const userLogin = asyncHandeller(async(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password)
    {
        res.status(400)
        throw new Error("All fields are mandatory");
    }

    const user = await usersDB.findOne({email})
    if(user && await bcrypt.compare(password, user.password))
    {
        const accesstoken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                id : user._id
            }
        }, process.env.SECRET_MESSAGE,
        {expiresIn : "5m"})
        res.status(201).json({accesstoken});
    }
    else
    {
        res.status(400)
        throw new Error("email or password invalid");
    }
})

const userRegister = asyncHandeller(async (req, res)=>{
    const {username, email, password} = req.body;
    if(!username || !email || !password)
    {
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    const record = await usersDB.findOne({email});
    if(record)
    {
        res.status(403);
        throw new Error(`A user with this ${email} email is already registered`)
    }    
    const hashPassword = await bcrypt.hash(password, 10)
    const user = await usersDB.create({username, email, password : hashPassword})
    console.log(user)
    res.send("user is sucessfully registered in");
})

const currentUser = (req, res)=>{
    res.json(req.user)
}

export {userLogin, userRegister, currentUser}