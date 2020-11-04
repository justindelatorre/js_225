let shape = {
  getType: function() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  Object.setPrototypeOf(this, shape);
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = 'triangle';
  this.getPerimeter = function() {
    return this.a + this.b + this.c;
  };
}

let t = new Triangle(3, 4, 5);
console.log(t.constructor);                 // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t));        // true
console.log(t.getPerimeter());              // 12
console.log(t.getType());                   // "triangle"
