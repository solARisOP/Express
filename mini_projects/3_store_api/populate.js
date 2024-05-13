import dotenv from "dotenv"
import { ConnectDB } from "./config/connectdb.js"
import {Product} from "./models/productModels.js"
import jsonData from './products.json' assert { type: 'json' };

dotenv.config()
await ConnectDB();
try {
    await Product.deleteMany({});
    await Product.create(jsonData);
    process.exit(0);
} catch (error) {
    console.log(error.message, error.stack)
    process.exit(1);
}



