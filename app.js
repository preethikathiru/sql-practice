var express = require('express');
const app = express()
var route = require('./route');

app.get('/', function(req,res){
    res.sendStatus(405);
})

app.use('/api',route)





app.listen(4000)
