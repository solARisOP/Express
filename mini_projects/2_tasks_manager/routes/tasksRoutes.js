import express from 'express'
import { getAllTasks, createTask, updateTask, deleteTask, getTask } from '../controllers/tasksController.js';

export const router = express.Router();

router.route('/').get(getAllTasks).post(createTask)

router.route('/:id').get(getTask).delete(deleteTask).patch(updateTask)
