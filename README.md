## Overview
This is a backend task management app using Node.js and Express.js. Supported functions include:
- Create a new task
- Get all tasks from database 
- Get one task by ID or title 
- Delete a task by ID
- Update a task by ID 

## Project structure 
- /controllers: folder containing all logic to handle above functions
    - taskController.js: file to write backend logic 
    - You can also separate each function in a separated file 
- /db: define database schema 
- /routes: defining all routes for all above functions

## My personal notes
- I explained why we must switch order between /:id and /:title in taskRoutes.js
- Read more about difference between req.params and req.query: https://www.geeksforgeeks.org/difference-between-req-query-and-req-params-in-express/
- When you commit codes, you should add .env and node_modules to .gitignore file so that they will not be pushed to Github
