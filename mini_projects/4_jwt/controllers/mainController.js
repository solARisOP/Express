import JsonWebToken from "jsonwebtoken"

const login = async (req, res)=>{
    const {username, password:pass} = req.body
    if(!username || !pass)
    {
        res.status(400)
        throw new Error('username and password both fields are mandatory')
    }
    const id = new Date().getDate();
    const token = JsonWebToken.sign({id, username},process.env.jwt_secret,{expiresIn:'30d'});
    res.json({msg : 'welcome user', token});
}

const dashboard = async (req, res)=>{
    res.status(201)
    res.json({msg : `Hello ${req.user.username}`, secret : `This is your id ${req.user.id}`});
}

export {login, dashboard}