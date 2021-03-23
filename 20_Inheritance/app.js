function Person(firstName, lastName) {
    this.lastName = lastName;
    this.firstName = firstName;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.firstName + " " + this.lastName);
};

var john = new Person('John', 'Doe');
john.greet();
// console.log(john);

var julio = new Person('Julio', 'González');
julio.greet();

console.log(john.__proto__);
console.log(julio.__proto__);
console.log(john.__proto__ === julio.__proto__);