const todos = require('../db/simulationDB.js')
const isRegistered =(req, res, next) =>{
    const todo = todos.find(todo => todo.id === (+req.params.id));
    console.log(todo);
    if(!todo) return res.status(404).json({messagge: "Todo cant be removed, because that todo not exists"});
    return next(); 
}

module.exports = isRegistered;