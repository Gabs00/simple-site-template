/*
  @template-name:'basic-express-server'
  @dependencies:['express']
*/


var app = require('express')();


var publicFiles = './';
var indexPath = publicFiles + 'index.html';


//Set up handlers below
app.use('/', function(req,res){
  if(req.url === '/'){
    res.sendFile(indexPath, {root:publicFiles});
  } else {
    res.sendFile(req.url, {root:publicFiles});
  }
});

module.exports = app;
