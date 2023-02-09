const Task = require("../models/todoModel");

exports.getAllTodos = async (req, res) => {
    // res.send("Hello World from the controller");
    try {
        const Tasks = await Task.find();
        res.status(200).json({
            status: "success",
            results: Tasks.length,
            data: {
                Tasks,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.createTasks = async (req, res) => {
    try {
        const newTask = await Task.create(req.body);
        res.status(201).json({
            status: "success",
            data: {
                task: newTask,
            },
        });
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        });
    }
};

exports.getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json({
            status: "success",
            data: {
                task,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).json({
            status: "success",
            data: {
                task,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: "fail",
            message: err,
        });
    }
};
