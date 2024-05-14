import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors';
import { invalidRoute } from './middleware/invalidRouteMiddleware.js';
import { errorHandeler } from './middleware/errorhandelerMiddleware.js';
import { router } from './routes/mainRoute.js';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/v1', router)
app.use(invalidRoute)
app.use(errorHandeler)

app.listen(port, console.log(`listening on port ${port}...`));


