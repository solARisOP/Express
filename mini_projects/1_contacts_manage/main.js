import dotenv  from "dotenv"
import express from "express"
import { router as contacts} from "./routes/routesContacts.js";
import { router as users} from "./routes/routesUsers.js";
import { Connect } from "./config/dbConnect.js";
import { errorHandeler } from "./middleware/errorHandlermiddleware.js"

dotenv.config()
Connect();

const app = express();
const PORT = process.env.PORT
app.use(express.json())
app.use('/contacts', contacts)
app.use('/users', users)
app.use(errorHandeler)

app.get('/', (req, res)=>{
    res.send('welcome');
})

app.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})