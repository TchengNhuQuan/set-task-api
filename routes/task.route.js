const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task.Controller");

//Get a list of all tasks
router.get("/", taskController.getAlltasks);

//Create a new task
router.post("/", taskController.createNewtask);

//Get a task by id
router.get("/:id", taskController.findtaskById);

//Update a task by id
router.patch("/:id", taskController.updateAtask);

//Delete a task by id
router.delete("/:id", taskController.deleteAtask);

module.exports = router;
