// REQUIRED EXPRESS
var express = require('express');
var app = express();

// SERVER.JS
app.use(express.static('public'));

// DATABASE
var db = require('./models')

// var body-parser = require('body-parser');
// app.use(body)

// HTML ENDPOINTS
app.get('/', function test(req, res){
  // console.log("Hello world");
  res.sendFile('/views/index.html', {root: __dirname});
})

// PROCESS.ENV IS USED FOR HEROKU. process.env.PORT ||
// FOR LOCAL ONLY, JUST 3000
app.listen(3000, function (){
  console.log("Express server is running")
});
