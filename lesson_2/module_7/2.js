// What will the code below log to the console? What does this output 
// demonstrate in relation to the output of problem one?

let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj);
console.log(myObj.message);

// Line 11: 'Greetings from the function scope!'
// Line 12: 'Greetings from the function scope!'
// Reason: myObj message property gets modified.
