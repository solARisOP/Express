import express from "express"
import { userRegister, userLogin, currentUser } from "../controllers/controllerUsers.js";
import { validateToken } from "../middleware/validateTokenmiddleware.js";

export const router = express.Router();

router.post('/login', userLogin)
router.post('/register', userRegister)
router.get('/current', validateToken, currentUser)