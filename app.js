"use strict";

var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/wilhelm.html'));
});

app.listen(8080);