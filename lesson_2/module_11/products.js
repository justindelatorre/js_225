function createProduct(id, name, stock, price) {
  return {
    id,
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log('Invalid price.');
        return;
      }

      this.price = newPrice;
    },  

    describeProduct() {
      console.log(`Name: ${this.name}`);
      console.log(`ID: ${this.id}`);
      console.log(`Price: $${this.price}`);
      console.log(`Stock: ${this.stock}`);
    },
  };
}

let scissors = createProduct(0, 'Scissors', 8, 10);
let drill = createProduct(0, 'Cordless Drill', 15, 45);
let saw = createProduct(0, 'Scissors', 10, 15);
let hammer = createProduct(0, 'Cordless Drill', 7, 42);
console.log(scissors);
console.log(drill);
console.log(saw);
console.log(hammer);
