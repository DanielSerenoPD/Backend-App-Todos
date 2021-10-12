const todos = [{id: 1, title:'go to the gym'},{id: 2, title:'go to the cinema'},{id: 3, title:'go to the market'}]
const express = require('express');
const router = express.Router();

router.use(express.json());
router.get('/',(req, res)=>{
    res.json(todos);
});
router.get('/:id',(req,res)=>{
    const todo = todos.find(todo=>todo.id === parseInt(req.params.id));
    todo&&res.json(todo);
    res.status(404).json({message: "Todo not found."});
});

router.post('/',(req, res)=>{
 res.status(200).json(req.body);
});


module.exports = router;