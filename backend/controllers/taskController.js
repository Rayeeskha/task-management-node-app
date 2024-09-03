const Task = require('../models/TaskModel');

//Create tasks
const createTask = async (req, res) => {
    try {
      const task = await Task.create(req.body);
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({masg:error.message});
    }
};

// GET ALL TASKS
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error);
        res.status(500).json({masg:error.message});
    }
};

//GET SINGLE TASK
const getTask = async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findById(id);
        if(!task){
            res.status(400).json(`Task not found in this id : ${id}`);
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({masg:error.message});
    }
};

//DELTE TASK
const deleteTask = async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findByIdAndDelete(id);
        if(!task){
            res.status(400).json(`Task not found in this id : ${id}`);
        }
        res.status(200).json('Task deleted Successfully !');
    } catch (error) {
        res.status(500).json({masg:error.message});
    }
};

//UPDATE TASK
const updateTask = async (req, res) => {
    const {id} = req.params;
    try {
        const task = await Task.findByIdAndUpdate(
            {_id:id}, req.body,{new : true, runValidators:true}
        );
        if(!task){
            res.status(400).json(`Task not found in this id : ${id}`);
        }
        let msg = 'Task updated Successfully !';
        res.status(200).json({msg, task});
    } catch (error) {
        res.status(500).json({masg:error.message});
    }
};


module.exports = {
    createTask,getTasks,getTask,deleteTask,updateTask
}