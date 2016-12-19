var express = require('express'),
    bodyParser = require('body-parser'),
    db = require('./models'),
    app = express();

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile('/views/index.html', {
        root: __dirname
    });
    console.log("Received GET request!");
});

app.listen(3000, function() {
    console.log("Listening at Port 3000!");
});
