const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: Boolean,
        default: false,
    },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
