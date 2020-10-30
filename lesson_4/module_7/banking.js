// https://launchschool.com/lessons/0b371359/assignments/e071c151

function makeBank() {
  let accounts = [];

  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {
      deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: 'deposit', amount: amount });
        return amount;
      },

      withdraw(amount) {
        if (amount > this.balance) {
          let oldBalance = this.balance;
          this.balance = 0;
          this.transactions.push({ type: 'withdrawal', amount: oldBalance });
          return oldBalance;
        } else {
          this.balance -= amount;
          this.transactions.push({ type: 'withdrawal', amount: amount });
          return amount;
        }
      },

      balance() {
        return balance;
      },

      number() {
        return number;
      },

      transactions() {
        return transactions;
      },
    };
  }

  return {
    openAccount() {
      let number = accounts.length + 101;
      let newAccount = makeAccount(number);
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}
