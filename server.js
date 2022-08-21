const express = require('express')
const dotenv = require('dotenv');


const app = new express()
dotenv.config();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(process.env.PORT || 5000, (err)=>{
    if (err) console.log(err);
})