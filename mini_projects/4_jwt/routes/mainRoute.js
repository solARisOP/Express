import { login, dashboard } from "../controllers/mainController.js";
import express from 'express'
import { authenticationVerify } from '../middleware/authMiddleware.js';

export const router = express.Router();

router.route('/login').post(login);
router.route('/dashboard').get(authenticationVerify, dashboard);