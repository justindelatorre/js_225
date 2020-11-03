// https://launchschool.com/exercises/19cc5636

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies() {
    let self = this;
    return [1, 2, 3].map(function(number) {
      return `${self.name} ${number}`;
    });
  },
};

console.log(franchise.allMovies());

// EXPECTED
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]

// EXPLANATION
// In the original implementation, this referred to the
// context when the franchise.allMovies() method was
// invoked, which occurred at the global scope. To fix
// this, we need to capture the state of this at the
// object level. We do so by storing its value in a
// variable outside of the function body.
