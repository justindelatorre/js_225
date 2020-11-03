// What does the following log to the console?

let a = 1;
let foo;
let obj;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar(); // Invocation, affects context
}

foo = new Foo(); 
// Construction executes the constructor
// this refers to Foo function context, so logs 2

foo.bar(); // => 2, since object foo invokes bar
Foo(); // => 2, changes global this.a to 2 because Foo is
// called at the global scope

obj = {};
Foo.call(obj); // => 2, adds properties of Foo to obj
obj.bar(); // => 2

console.log(this.a); // => 2, since global this.a was changed on line 20
