let a = 10;
const b = "2";
let myName = "nico"; // myName은 update 될 수 있다
const yourName = "hyeon"; // yourName은 update 될 수 없다

console.log(a + b); // 더하기는 문자로 처리 되고
console.log(a * b); // 나머지 산술연산자는 계산됨.
console.log(a / b);
console.log(a - b);
console.log("hello" + " nico");
console.log("hello " + myName);

myName = "hyeon";
console.log(myName);
// yourName = "nahyeon"; // typeErr
