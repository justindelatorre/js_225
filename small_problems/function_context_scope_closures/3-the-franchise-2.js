// https://launchschool.com/exercises/93dc9433

const franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return `${this.name} ${number}`;
    }.bind(this));
  },
};

console.log(franchise.allMovies());

// EXPECTED
// [
//   'How to Train Your Dragon 1',
//   'How to Train Your Dragon 2',
//   'How to Train Your Dragon 3'
// ]
