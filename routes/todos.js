const todos = [{id: 1, title:'go to the gym'},{id: 2, title:'go to the cinema'},{id: 3, title:'go to the market'}]
const express = require('express');
const router = express.Router();

router.get('/',(req, res)=>{
    res.json(todos);
});
router.get('/:id',(req,res)=>{
    res.json(todos.find(todo=>todo.id === parseInt(req.params.id)));
});


module.exports = router;