var express = require("express");
var app = express();

//route
app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.post('/post', (req, res) => {
    res.status(200).send('Hello Jasmine');
});


//connect  server
var server = app.listen(3000);
//export 
module.exports = server