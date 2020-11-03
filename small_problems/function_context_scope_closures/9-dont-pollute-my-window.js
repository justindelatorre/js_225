// https://launchschool.com/exercises/1ec4bc37

const greeter = {
  message: (() => {
    const name = 'Naveed';
    const greeting = 'Hello';

    return `${greeting} ${name}!`;
  })(),

  sayGreetings() {
    console.log(this.message);
  },
};
