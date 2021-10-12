let todos = require('../db/simulationDB.js')
module.exports ={
    getTodo: (req, res) => {
        const todo = todos.find(todo => todo.id === parseInt(req.params.id));
        todo && res.json(todo);
       return res.status(404).json({ message: "Todo not found." });
    },
    getTodos: (req, res) => {
        res.json(todos);
    },
    addTodo: (req, res) => {
        const todo = { id: req.body.id, title: req.body.title };
        todos.push(todo);
        return res.status(200).json(todo);
    },
    updateTodo: (req,res)=>{
        let todo = todos.find(todo=>todo.id === req.body.id);
        if(todo){
        todo.title="Todo updated";
        return res.status(200).json(todo);
        }
        return res.status(404).json({message:"Todo has not modified"});
    },
    deleteTodo: (req, res)=>{
        todos = todos.filter(todo => todo.id !== (+req.params.id));
        return res.status(200).json({message:"Todo successfully removed"})
    }

}