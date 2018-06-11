const express = require('express');
const fs = require('fs');

var app = express();


 app.use((req,res,next)=>{
        var filename = __dirname+'/log.txt';
        var data = new Date().toString() + ' ' + req.url +'\n';
        console.log(filename);
        console.log(data);
        
        // fs.appendFile(filename,data,(err) => {
        //     if (err) throw err;
        //    // console.log('The "data to append" was appended to file!');
        // });
 
        next();
 });

app.get('/', (req, res) => res.send('<html><body><h1>Testando 123456</h1></body></html>'))
app.get('/hello!', (req, res) => res.send('<html><body><h1>Hello World!!!!</h1></body></html>'))



var port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}!`));


