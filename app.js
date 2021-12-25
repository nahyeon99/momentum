const calculator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiplay: function (a, b) {
    return a * b;
  },
  devide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};

console.log(calculator.add(2, 3));
console.log(calculator.minus(2, 3));
console.log(calculator.multiplay(2, 3));
console.log(calculator.devide(2, 3));
console.log(calculator.power(2, 3));
