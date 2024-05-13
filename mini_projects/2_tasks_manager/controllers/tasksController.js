import { taskModel } from "../models/tasksmodel.js";

const getAllTasks = async(req, res)=>{
    try {
        const tasks = await taskModel.find({});
        res.status(201).json(tasks);
    } catch (error) {
        res.status(500).json(error);
    }
}

const createTask = async (req, res)=>{
    try {
        const data = await taskModel.create(req.body);
        res.status(201).send(data._id);
        
    } catch (error) {
        res.status(500).json(error);
    }
}

const getTask = async (req, res)=>{
    try {
        const task = await taskModel.findOne({_id : req.params.id});
        if(!task) return res.status(404).json({msg : `no task with this ${req.params.id} is found`});
        res.json(task);
    } catch (error) {
        res.status(500).json(error);
    }
}

const updateTask = async (req, res)=>{
    try {
        console.log('update')
        const task = await taskModel.findOneAndUpdate({_id : req.params.id}, req.body, {new : true, runValidators : true});
        if(!task) return res.status(404).json({msg : `no task with this ${req.params.id} is found`});
        res.json(task);
    } catch (error) {
        res.status(500).json(error);
    }
}

const deleteTask = async (req, res)=>{
    try {
        const task = await taskModel.findOneAndDelete({_id : req.params.id});
        if(!task) return res.status(404).json({msg : `no task with this ${req.params.id} is found`});
        res.json(task);
    } catch (error) {
        res.status(500).json(error);
    }
}


export {getAllTasks, createTask, updateTask, deleteTask, getTask};