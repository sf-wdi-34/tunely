var express = require('express'),
    app = express();



app.get('/', function(req, res){
  console.log(__dirname);
  res.sendFile('views/index.html', { root: __dirname});
});

app.listen(process.env.port || 3000, function(){
  console.log('express server online on port ', 3000);
});
