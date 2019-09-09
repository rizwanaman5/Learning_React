var express = require('express');
const db = require('../models');
var router = express.Router();

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* GET users listing. */
// router.get('/', (req, res) => {
//   db.Todo.find()
//     .then((data) => res.send(data))
//     .catch((err) => res.send(err))
// });

router.get('/', function (req, res, next) {
  db.Todo.find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err))
});

// router.post('/', (req, res) => {
//   db.Todo.create({'todo':req.body})
//     .then(res.json({ 'status': 'data saved' }))
//     .catch((err) => res.send(err))
// });

router.post('/', function (req, res, next) {
  db.Todo.create({
    todo: req.body.todo
  })
    .then(res.json({ 'status': 'data saved' }))
    .catch((err) => res.send(err))
});

router.delete('/', function (req, res, next) {
  
  db.Todo.findByIdAndDelete({
    _id: a
  })
    .then(res.json({ 'status': 'deleted' }))
    .catch((err) => res.send(err))
});

module.exports = router;
