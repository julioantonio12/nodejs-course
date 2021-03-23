//a function passed to a function which will be invoked at
//some point
function greet(callback) {
  console.log("Hello!");
  var data = {
    name: "Julio González",
  };

  callback(data);
}

greet(function (data) {
  console.log("Se llamó al callback. Esta es su funcionalidad: Imprimir.");
  console.log(data);
});

greet(function (data) {
  console.log("Este es el segundo callback");
  console.log(data.name);
});
