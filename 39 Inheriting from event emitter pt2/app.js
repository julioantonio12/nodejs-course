// var EventEmitter = require("events");
// var util = require("util");

// function Greetr() {
//     EventEmitter.call(this);
//     this.greeting = "Hello world!";
// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function(data) {
//     console.log(this.greeting + ": " + data);
//     this.emit("greet", data);
// }

// var greeter1 = new Greetr();
// greeter1.on("greet", function(data) {
//     console.log("Someone greeted!: " + data);
// });

// greeter1.greet("Julio guapo");

var util = require("util");

function Person() {
  this.firstName = "John";
  this.lastName = "Doe";
}

Person.prototype.greet = function () {
  console.log("Hello " + this.firstName + " " + this.lastName);
};

function Policeman() {
  //in this line Person function initializes the first and lastname
  Person.call(this);
  this.badgeNumber = "12345";
}

util.inherits(Policeman, Person);
var officer = new Policeman();
officer.greet();
