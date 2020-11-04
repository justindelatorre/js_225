// Implement an ancestors method that returns the prototype chain (ancestors) of a 
// calling object as an array of object names

Object.prototype.ancestors = function() {
  let ancestors = [];
  let currentPrototype = Object.getPrototypeOf(this);
  while (currentPrototype !== Object.prototype) {
    ancestors.push(currentPrototype.name);
    currentPrototype = Object.getPrototypeOf(currentPrototype);
  }

  return ancestors.concat(['Object.prototype']);
};

const foo = { name: 'foo' };
const bar = Object.create(foo);
bar.name = 'bar';
const baz = Object.create(bar);
baz.name = 'baz';
const qux = Object.create(baz);
qux.name = 'qux';

console.log(qux.ancestors());
console.log(baz.ancestors());
console.log(bar.ancestors());
console.log(foo.ancestors());
