const express = require('express');
const router = express.Router();
let todos = require('../db/simulationDB.js');
const isRegistered = require('../middlewares/isRegistered.js');
const isTitle = require('../middlewares/isTitle.js');
router.use(express.json());

router.get('/', (req, res) => {
    res.json(todos);
});
router.get('/:id', (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    todo && res.json(todo);
   return res.status(404).json({ message: "Todo not found." });
});

router.post('/', isTitle, (req, res) => {
    const todo = { id: req.body.id, title: req.body.title };
    todos.push(todo);
    return res.status(200).json(todo);
});

router.put('/:id',(req,res)=>{
    let todo = todos.find(todo=>todo.id === req.body.id);
    if(todo){
    todo.title="Todo updated";
    return res.status(200).json(todo);
    }
    return res.status(404).json({message:"Todo has not modified"});
});
router.delete('/:id', isRegistered, (req, res)=>{
    todos = todos.filter(todo => todo.id !== (+req.params.id));
    return res.status(200).json({message:"Todo successfully removed"})
});


module.exports = router;