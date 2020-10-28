let invoices = {
  unpaid: [],
};

invoices.add = function(name, amount) {
    this.unpaid.push({ 
      name, 
      amount
    });
};

invoices.totalDue = function() {
  return this.unpaid.reduce((total, invoice) => {
    return total + invoice.amount;
  }, 0);
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());

invoices.paid = [];
invoices.payInvoice = function(name) {
  let newUnpaid = [];
  this.unpaid.forEach(invoice => {
    if (invoice.name === name) {
      this.paid.push(invoice);
    } else {
      newUnpaid.push(invoice);
    }
  });

  this.unpaid = newUnpaid;
};

invoices.totalPaid = function() {
  return this.paid.reduce((total, invoice) => {
    return total + invoice.amount;
  }, 0);
};

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());

