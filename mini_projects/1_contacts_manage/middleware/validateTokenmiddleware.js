import expressAsyncHandler from "express-async-handler";
import jsonwebtoken from "jsonwebtoken";

const jwt = jsonwebtoken;
const asyncHandeller = expressAsyncHandler;

export const validateToken = asyncHandeller(async(req, res, next) =>{
    const auth = req.headers.Authorization || req.headers.authorization
    if(auth && auth.startsWith("Bearer"))
    {
        const accessToken = auth.split(' ')[1];

        jwt.verify(accessToken, process.env.SECRET_MESSAGE, (err, decode)=>{
            if(err)
            {
                res.status(401);
                throw new Error("the user is not logged in")
            }
            else
            {
                req.user = decode.user;
                next();
            }
        });
    }
    else{

        res.status(401);
        throw new Error("the user is not logged in")
    }
})