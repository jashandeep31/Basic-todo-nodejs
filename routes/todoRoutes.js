const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

router
    .route("/")
    .get(todoController.getAllTodos)
    .post(todoController.createTasks);

router
    .route("/:id")
    .get(todoController.getTask)
    .patch(todoController.updateTask);

module.exports = router;
