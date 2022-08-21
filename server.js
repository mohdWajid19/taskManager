const express = require('express')
const dotenv = require('dotenv');


const app = new express()
dotenv.config();

app.set('view engine', 'ejs')
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
app.get('/', (req, res) => {
    res.render('index', {data: data})
})


app.listen(process.env.PORT || 5000, (err)=>{
    if (err) console.log(err);
})