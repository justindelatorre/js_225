// https://launchschool.com/exercises/ebdf8410

function makeCounter() {
  let count = 1;

  return () => {
    console.log(count++)
  };
}

const counter = makeCounter();
counter();
// more code

// EXPLANATION
// No, since the counter function has closed over
// the makeCounter function's parent scope.
