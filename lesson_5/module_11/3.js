// Create a function that can create an object with a given object as its prototype, 
// without using Object.create.

function createObject(obj) {
  function someFunction() {}
  someFunction.prototype = obj;
  return new someFunction();
}

let foo = {
  a: 1,
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));           // true
