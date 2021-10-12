const express = require('express');
const router = express.Router();
let todos = require('../db/simulationDB.js');
const controller = require('../controllers/todos.controller')
const isRegistered = require('../middlewares/isRegistered.js');
const isTitle = require('../middlewares/isTitle.js');
router.use(express.json());

router.get('/', controller.getTodos);
router.get('/:id', controller.getTodo);
router.post('/', isTitle, controller.addTodo);
router.put('/:id',controller.updateTodo);
router.delete('/:id', isRegistered, controller.deleteTodo);


module.exports = router;