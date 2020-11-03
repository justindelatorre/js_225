// What will the following code log out and why?

let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = { // points to a different object
  swingSword: function() {
    return this.swung;
  },
};

console.log(ninja.swingSword); // TypeError
