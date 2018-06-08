const express = require('express');
const fs = require('fs');

var app = express();


// app.use((req,res,next)=>{
//     fs.appendFileSync('log.txt',new Date().toString() + ' ' + req.url,(err) => {});
//     next();
// });


app.get('/teste', (req, res) => res.send('<html><body><h1>Hello World!</h1></body></html>'))




//app.listen(3000, () => console.log('Listening on port 3000!'))
app.listen(3000);
