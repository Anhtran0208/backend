import express from "express"
import { createTask, deleteTask, getAllTasks, updateTask, viewTask, viewTaskByTitle } from "../controllers/taskController.js"

const router = express.Router();
router.post("/", createTask)
router.get("/", getAllTasks)

/*
We must define /:title route before /:id. 
Otherwise, /:id route will run first and when running /:title,
Node treats "title" as an "id" and it causes the bug as I entered yesterday. 
*/
router.get("/:title", viewTaskByTitle)
router.get("/:id", viewTask)
router.delete("/:id", deleteTask)
router.put("/:id", updateTask)
export default router;