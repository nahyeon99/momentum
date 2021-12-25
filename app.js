// 1
function sayHello(name, age) {
  console.log("Hello my name is ", name, " My age is", age);
}

sayHello("nahyeon", 23);

// 2
function plus(a, b) {
  return a + b;
}

function devide(a, b) {
  return a / b;
}

console.log(plus(2, 3));
console.log(devide(40, 2));

// 3
const player = {
  name: "nahyeon",
  sayHi: function (name) {
    console.log("hi ", name, " nice to meet you!");
  },
};

console.log(player.name);
player.sayHi("hy");
player.sayHi("hyeon");
