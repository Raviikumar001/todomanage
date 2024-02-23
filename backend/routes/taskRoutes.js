const express = require('express');
const router = express.Router();
const {GetAllTasks,AddNewTask,UpdateTask,DeleteTask} = require('../controllers/tasks-controller')

router.get('/get-tasks',GetAllTasks );
router.post('/create-task',AddNewTask);
router.patch('/update-task', UpdateTask);
router.delete('/delete-task', DeleteTask);

module.exports= router;




