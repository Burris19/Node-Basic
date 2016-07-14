var express = require('express');

var app = express();

// Enrutamiento

app.get(
  '/', function (req, res) {
      res.sendFile(__dirname + '/public/index.html');
  }
);

app.get(
  '/contact', function (req, res) {
      res.sendFile(__dirname + '/public/contact.html');
  }
);


app.listen(9000);

console.log('Server iniciado..');
