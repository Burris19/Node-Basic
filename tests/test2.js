var fact = 0;
var resp = 0;

fact = 5;
resp = 1;

for (var i = 1; fact >= i; i++) {
  resp = resp * i;
  console.log(' iteracion ' + i + ' : ' + ' rest: ' + resp);
}

console.log('El factorial del numero ' + fact + ' es : ' + resp);
