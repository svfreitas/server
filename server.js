const express = require('express');
const fs = require('fs');

var app = express();


 app.use((req,res,next)=>{
         fs.appendFileSync('./log.txt',new Date().toString() + ' ' + req.url,(err) => {});  
         next();
 });

 app.get('/', (req, res) => res.send('<html><body><h1>Testando</h1></body></html>'))
app.get('/hello', (req, res) => res.send('<html><body><h1>Hello World!!!!</h1></body></html>'))



var port = process.env.PORT || 3000;
app.listen(process.env.PORT, () => console.log(`Listening on port ${port}!`));


