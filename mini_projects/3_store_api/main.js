import express from 'express'
import dotenv from 'dotenv'
import 'express-async-errors';
import { ConnectDB } from './config/connectdb.js';
import { router as productRouter } from './routes/productRoutes.js';
import { invalidRoute } from './middleware/invalidRouteMiddleware.js';
import { errorHandeler } from './middleware/errorhandelerMiddleware.js';

dotenv.config();

ConnectDB();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api/v1/products', productRouter)
app.use(invalidRoute)
app.use(errorHandeler)

app.listen(PORT, console.log(`listening on port ${PORT}...`));


