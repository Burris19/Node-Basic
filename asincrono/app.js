var archivo = require('fs');
var datos = archivo.readFileSync('test.txt');

console.log(datos.toString());
