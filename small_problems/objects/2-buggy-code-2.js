// https://launchschool.com/exercises/3e4c0ba2

const item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = this.price * percent / 100;
    // this.price -= discount;

    return this.price - discount;
  },
};

console.log(item.discount(20));   // should return 40
// = 40
console.log(item.discount(50));   // should return 25
// = 20
console.log(item.discount(25));   // should return 37.5
// = 15

// Reason: `this` keyword on line 10 leads to manipulation of an object property,
// rather than just calculating a theoretical discount.
