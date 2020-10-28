// What will the code below output to the console?

let message = 'Hello from the global scope!';

function func(message) {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(message);
console.log(message);

// Line 10: "Hello from the function scope!"
// Line 11: "Hello from the global scope!"
// Reason: Variable Shadowing
