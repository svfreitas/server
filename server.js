const express = require('express');
const fs = require('fs');

var app = express();


app.use((req,res,next)=>{
    fs.appendFileSync('log.txt',new Date().toString() + ' ' + req.url,(err) => {});
    next();
});


app.get('/', (req, res) => res.send('Hello World!'))




app.listen(80, () => console.log('Listening on port 80!'))
