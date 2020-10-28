// What will the code below log to the console?

let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message);
}

func(); // 'Hello from the function scope!'
console.log(message); // 'Hello from the global scope!'

// Reason: No object or primitive is passed to the function.
