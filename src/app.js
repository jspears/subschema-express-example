"use strict";
var express = require('express');
var app = express();
var shush = require('shush');
console.log('starting server');
app.set('views', './schemas');
app.set('view engine', 'json');
app.engine('json', require('./viewEngine'));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});