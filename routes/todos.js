let todos = [{ id: 1, title: 'go to the gym' }, { id: 2, title: 'go to the cinema' }, { id: 3, title: 'go to the market' }]
const express = require('express');
const router = express.Router();

router.use(express.json());
const validateTodo = (req, res, next) => {
    if (req.body.id !== null && req.body.title.length > 0) {
        return next();
    }else{
        return res.status(404).json({message:'Todo requires the title and id field'})
    }
    
};
const removeTodo =(req, res, next) =>{
    const todo = todos.find(todo => todo.id === (+req.params.id));
    console.log(todo);
    if(!todo) return res.status(404).json({messagge: "Todo cant be removed, because that todo not exists"});
    return next(); 
}
router.get('/', (req, res) => {
    res.json(todos);
});
router.get('/:id', (req, res) => {
    const todo = todos.find(todo => todo.id === parseInt(req.params.id));
    todo && res.json(todo);
   return res.status(404).json({ message: "Todo not found." });
});

router.post('/', validateTodo, (req, res) => {
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
router.delete('/:id', removeTodo, (req, res)=>{
    todos = todos.filter(todo => todo.id !== (+req.params.id));
    return res.status(200).json({message:"Todo successfully removed"})
});


module.exports = router;