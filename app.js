const express = require('express');
const app = express();
const todos = require('./routes/todos.js');
app.use('/todos', todos);
app.get('/',(req,res)=>{
    res.send(`<h1 align="center">Home</h1>`);
});

app.listen(3000);