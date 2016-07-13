var archivo = require('fs');

var Promise = require('promise');

archivo.readFile(
    'test.txt', function (err, data) {
      var Promise = require('promise');

      promesa = new Promise(
        function (resolve, reject) {
          var contador = 0;
          var rpta = 0;

          for (var i = 0; i <=20000; i++) {

              if(i==20000){
                contador = 1;
              }
          }

          if(contador > 0 ) {
            resolve('Bucle termino con exito');
          }else{
            reject('Error con la variable contador');
          }
        }
      )

      promesa.then(function (resultado) {
          console.log(resultado);
      }, function(error) {
          console.log(error);
      }).catch(function(error) {
          console.log(error);
      });

    }
);

console.log('Proceso de lectura Finalizada');
