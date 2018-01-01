const path = require('path');

const express = require('express');

const publicPath = path.join(__dirname, '../public');
var port = process.env.port || 3555;
var app = express();

app.use(express.static(publicPath));


app.listen(port, function(){
    console.log(`server is up on port ${port}`);
});