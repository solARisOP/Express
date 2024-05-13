import express from "express";
import { getAllproducts, getAllproductsStatic } from "../controllers/productControllers.js";
export const router = express.Router();

router.route('/').get(getAllproducts);
router.route('/static').get(getAllproductsStatic);
