const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/reacttodo', {useNewUrlParser: true}, ()=> console.log('successfully connected to DB'));

module.exports.Todo = require('./todos');