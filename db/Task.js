import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    deadline: {
        type: Date,
        default: Date.now
    }
})

const Task = new mongoose.model("Task", taskSchema)
export default Task
