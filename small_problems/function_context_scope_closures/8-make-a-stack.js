// https://launchschool.com/exercises/b4d7bd8a

function newStack() {
  const stack = [];

  return {
    push(val) {
      stack.push(val);
    },

    pop(val) {
      return stack.pop();
    },

    printStack() {
      stack.forEach(element => {
        console.log(element);
      });
    },
  };
}
