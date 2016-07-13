var archivo = require('fs');

archivo.readFile(
    'test.txt', function (err, data) {
        if (err) return console.log(err);

        console.log(data.toString());
    }
);

console.log('Proceso de lectura Finalizada');
