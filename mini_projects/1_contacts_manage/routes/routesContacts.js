import express from "express"
import {allContact, createContact, getContact, updateContact, deleteContact} from "../controllers/controllerContacts.js"
import { validateToken } from "../middleware/validateTokenmiddleware.js";

export const router = express.Router();

router.use(validateToken)
router.route('/').get(allContact).post(createContact)
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact)