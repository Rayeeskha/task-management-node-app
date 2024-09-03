const express = require("express");
const router = express.Router();

const {createTask, getTasks,getTask, deleteTask, updateTask} = require('../controllers/taskController');



router.route("/").get(getTasks).post(createTask)
router.route("/:id").get(getTask).delete(deleteTask).put(updateTask);


// //Create Taks Route
// router.post("/", createTask);
// //Get tasks
// router.get("/",  getTasks);
// //GET SINGLE TASK
// router.get("/:id",  getTask);
// //Delete task
// router.delete("/:id",  deleteTask);
// //Update task
// router.put("/:id",  updateTask);

module.exports = router