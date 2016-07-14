var express = require('express');
var bodyParser = require('body-parser');


var app = express();

/*
* no se puede enviar valores en los parametros por la url
* solo por el formulario
*/
app.use(bodyParser.urlencoded({extended : false}));

app.get(
  '/', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
  }
);

app.post(
  '/login', function (req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log(user_name, password);
    res.end('Finalizado');
  }
);

app.listen(9000);
console.log('Server inicializado....')
