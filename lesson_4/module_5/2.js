let total = 0;

function add(number) {
  total += number;
  console.log(total);
}

function subtract(number) {
  total -= number;
  console.log(total);
}

add(1); // 1
add(42); // 43
subtract(39); // 4
add(6); // 10
