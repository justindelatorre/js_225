// https://launchschool.com/exercises/1937fc28

function objectsEqual(firstObj, secondObj) {
  let firstKeys = Object.keys(firstObj);
  let secondKeys = Object.keys(secondObj);
  let firstValues = Object.values(firstObj);
  let secondValues = Object.values(secondObj);

  for (let idx = 0; idx < firstKeys.length; idx += 1) {
    let firstKey = firstKeys[idx];
    let secondKey = secondKeys[idx];
    let firstValue = firstValues[idx];
    let secondValue = secondValues[idx];
    if (firstKey !== secondKey || firstValue !== secondValue) {
      return false;
    }
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
