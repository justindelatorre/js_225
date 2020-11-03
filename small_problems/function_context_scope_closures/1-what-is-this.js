// https://launchschool.com/exercises/f7659085

const person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

// Should log NaN, because adding undefined + undefined
// coerces each operand into a number type.
