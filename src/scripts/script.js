var initialAmount = +prompt('Enter initial deposit amount ', 1000);

var interestRate = +prompt('Enter winterest rate in %', 10);

var finalAmount = initialAmount + (initialAmount * interestRate) / 100;

if (initialAmount <= 1000 && interestRate <= 10) {
  alert(
    'Your interestrate is low! ' +
      '\n' +
      `You will get ${finalAmount}$ after 1 year`
  );
} else if (initialAmount > 1000 && interestRate > 10) {
  alert(
    'Your interestrate is good! ' +
      '\n' +
      `You will get ${finalAmount}$ after 1 year`
  );
} else if (initialAmount > 1000 && interestRate <= 10) {
  alert(
    'Your interestrate is low! ' +
      '\n' +
      `You will get ${finalAmount}$ after 1 year`
  );
} else if (initialAmount <= 1000 && interestRate > 10) {
  alert(
    'Your interestrate is very high! ' +
      '\n' +
      `You will get ${finalAmount}$ after 1 year`
  );
} else {
  alert('Try different values');
}
