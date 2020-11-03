let prot = {};

let foo = Object.create(prot);

console.log(Object.getPrototypeOf(foo) === prot);

console.log(prot.isPrototypeOf(foo));

prot.isPrototypeOf(foo); // true
Object.prototype.isPrototypeOf(foo); // true, considers prototype CHAIN
