var firstName = 'Jane';
(function (lastName) {
     var firstName = "Julio";
     console.log(firstName);
     console.log(lastName);
}('Doe'));


console.log(firstName);