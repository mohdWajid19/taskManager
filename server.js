const express = require('express')
const dotenv = require('dotenv');
const bodyParser  = require('body-parser');
const Task = require('./models/task')
const app = new express()
dotenv.config();

app.set('view engine', 'ejs')

// need bodyparser to parse data as json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// fake data before creating API for testing purpose
const data = [
    {
        'taskName' : 'eat',
        'completed' : false
    },
    {
        'taskName' : 'sleep',
        'completed' : false
    },
    {
        'taskName' : 'jog',
        'completed' : false
    },
    {
        'taskName' : 'run',
        'completed' : false
    },
    {
        'taskName' : 'eat',
        'completed' : false
    },
    {
        'taskName' : 'sleep',
        'completed' : false
    },
    {
        'taskName' : 'jog',
        'completed' : false
    },
    {
        'taskName' : 'run',
        'completed' : true
    },
    {
        'taskName' : 'eat',
        'completed' : true
    },
    {
        'taskName' : 'sleep',
        'completed' : true
    },
    {
        'taskName' : 'jog',
        'completed' : true
    },
    {
        'taskName' : 'run',
        'completed' : true
    },
    {
        'taskName' : 'eat',
        'completed' : true
    },
    {
        'taskName' : 'sleep',
        'completed' : true
    },
    {
        'taskName' : 'jog',
        'completed' : true
    },
    {
        'taskName' : 'run',
        'completed' : true
    }    
]
 
// home route
app.get('/', (req, res) => {
    res.render('index', {data: data})
})

// taking data from html form and adding to mongoDB
app.post('/add', function(req,res) {
  const task = new Task({
    taskName: req.body.taskName
  });
  task.save().then(val => {
    res.json({ msg: "task added", val: val })
    console.log("added new task")
  })
})

// listening to port
app.listen(process.env.PORT || 5000, (err)=>{
    if (err) console.log(err);
})
