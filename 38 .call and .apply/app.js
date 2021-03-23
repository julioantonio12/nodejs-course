//call or apply changes the "this" object

var obj = {
    name: "John Doe",
    greet: function(param) {
         console.log(`Hello ${this.name}!`);
    }
}

obj.greet();
//params separated by comma
obj.greet.call({ name: "Jane Doe" }, param, param2);

//param can be an array
obj.greet.apply({ name: "Jane Doe" }, [param, param2]);