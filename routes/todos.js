const todos = [{ id: 1, title: 'go to the gym' }, { id: 2, title: 'go to the cinema' }, { id: 3, title: 'go to the market' }]
const express = require('express');
const router = express.Router();

router.use(express.json());
const validateTodo = (req, res, next) => {
    if (req.body.id !== null && req.body.title.length > 0) {
        next();
    }else{
        res.status(404).json({message:'Todo requires the title and id field'})
    }
    
};
router.get('/', (req, res) => {
    res.json(todos);
});
router.get('/:id', (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    todo && res.json(todo);
    res.status(404).json({ message: "Todo not found." });
});

router.post('/', validateTodo, (req, res) => {
    const todo = { id: req.body.id, title: req.body.title };
    todos.push(todo);
    res.status(200).json(todo);
});

router.put('/:id',(req,res)=>{
    let todo = todos.find(todo=>todo.id === req.body.id);
    if(todo){
    todo.title="Todo updated";
    res.status(200).json(todo);
    }
    res.status(404).json({message:"Todo has not modified"});
});


module.exports = router;