const express = require('express');
const fs = require('fs');
const restify = require('restify');

//var app = express();


var server = restify.createServer();

function respond(req, res, next) {
    res.send('hello ' + req.params.name);
    next();
  }
  
  var server = restify.createServer();
  server.get('/hello/:name', (req,res,next)=>{
    res.send('hello!! ' + req.params.name);
    next();
  });
  server.head('/hello/:name', respond);
  
  
  var port = process.env.PORT || 3000;
  server.listen(port, function() {
    console.log('%s listening at %s', server.name, server.url);
  });
 



