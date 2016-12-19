//require express and body parser
var express = require('express'),
  bodyParser = require('body-parser');
// connect to db models
// var db = require('./models');
// generate a new express app and call it 'app'
var app = express();
// serve static files in public
app.use(express.static('public'));
// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

//////////////
//Routes
//////////////

app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});






//Starting the listening
app.listen(process.env.PORT || 3000, function () {
   console.log('Example app listening at http://localhost:3000/');
 });
