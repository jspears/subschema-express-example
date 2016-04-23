"use strict";
var express = require('express');
var app = express();
var ctx = require.context('../schemas', true, /\.json$/);
var viewEngine = require('./viewEngine')(ctx);

console.log('starting server');
app.set('views', '../schemas');
app.set('view engine', 'json');
app.engine('json', viewEngine);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.render('index', {title:"Hello HMR World"});
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});