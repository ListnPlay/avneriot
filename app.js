var express = require('express')
var app = express()


// SYSTEM JS
var System = require('systemjs');
require('./src/config');
//

app.get('/', function (req, res) {
   System.import('./index-server').then(function(m) {
        res.send('Hello World!')
  });
})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Node app listening at http://%s:%s', host, port)
})  
