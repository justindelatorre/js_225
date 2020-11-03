function greet(greeting, name) {
  let capitalized = greeting[0].toUpperCase() + greeting.slice(1);
  let message = capitalized + ', ' + name + '!';
  console.log(message);
}

function sayHello(name) {
  return greet('Hello', name);
}

sayHello('Brandon');

function sayHi(name) {
  return greet('Hi', name);
}

sayHi('Sarah');
