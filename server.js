var express = require('express'),
    app = express();



app.get('/', function(req, res){
  res.send('server.js online');
});

app.listen(process.env.port || 3000, function(){
  console.log('express server online on port ', 3000);
});
