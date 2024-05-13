import express from 'express'
import { router as tasks } from './routes/tasksRoutes.js';
import dotenv  from "dotenv"
import { ConnectDB } from './db/connect.js';
const app = express();
const port = 3000;

dotenv.config();
ConnectDB()

app.use(express.json());
app.use('/api/v1/tasks', tasks)

app.get('/', (req, res)=>{
    res.send('Hello world');
})


app.listen(port, console.log(`Server listening on ${port}...`));