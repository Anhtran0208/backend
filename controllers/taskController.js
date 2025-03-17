import Task from "../db/Task.js";

// Create a new task
export const createTask = async (req, res) => {
    try {
        if (!req.body.title || !req.body.description){
            return res.status(400).json({message: "Send all required fields: title, description"})
        }
        const newTask = new Task ({
            title: req.body.title,
            description: req.body.description,
        })
        await newTask.save()
        return res.status(201).json(newTask)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Get all tasks from database 
export const getAllTasks = async (req, res) => {
    try {
        const allTasks = await Task.find({})
        return res.status(200).json({data: allTasks})
    } catch (error){
        return res.status(500).json({message: error.message})
    }
}

// Get one task by ID
export const viewTask = async(req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        return res.status(200).json({data: task})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Get one task by title
export const viewTaskByTitle = async (req, res) => {
    try {
        const {title} = req.query.title;
        const task = await Task.find({title});
        return res.status(200).json({data: task});
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

// Delete a task 
export const deleteTask = async(req, res) => {
    try {
        const {id} = req.params;
        const response = await Task.findByIdAndDelete(id);
        if (response) {
            return res.status(200).json({ message: 'Task deleted successfully' });
        }
    } catch (error) {
        return res.status(500).json({message: error.message})

    }
}

// Update a task
export const updateTask = async (req, res) => {
    try {
        const {id} = req.params
        const updateTask = await Task.findByIdAndUpdate(id, {
            title: "delete a book"
        })
        await updateTask.save()
        if (updateTask){
            return res.status(200).json({data: updateTask})
        } else {
            return res.status(404).json({message: "Not found"})
        }
    } catch (error){
        console.log("error in updating task", error)
        return res.status(500).json({message: error.message})

    }
}

