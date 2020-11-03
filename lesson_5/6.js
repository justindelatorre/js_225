// Implement the method described in the comments below.

let ninjaA;
let ninjaB;
function Ninja() {
  this.swung = false;
}

ninjaA = new Ninja();
ninjaB = new Ninja();

// Add a swing method to the Ninja prototype which
// returns the calling object and modifies swung
Ninja.prototype.swing = function() {
  this.swung = true;
  return this;
};


console.log(ninjaA.swing().swung); // => true
console.log(ninjaB.swing().swung); // => true

