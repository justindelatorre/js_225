// Without using Object.create, create a begetObject method that you can call on any 
// object to create an object inherited from it.

let foo = {
  a: 1,
};

// Creating a function on the Object.prototype property means all
// downstream objects inherit the new method.
Object.prototype.begetObject = function() {
  function someFunction() {}
  someFunction.prototype = this;
  return new someFunction();
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));    // true
