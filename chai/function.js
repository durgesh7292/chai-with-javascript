// function sayMyName() {
//   console.log("d");
//   console.log("u");
//   console.log("r");
// }
// sayMyName();

// function addNumber(number1, number2) {
//   console.log(number1 + number2);
// }
// addNumber(3, 4);

// function addNumber(number1, number2) {
//   //let result = number1 + number2;
//   // return result;

//   return number1 + number2;
// }
// const result = addNumber(3, 5);
// console.log("result:" + result);

// function loginUserName(username) {
//   if (username === undefined) {
//     console.log("Please enter a username");
//     return;
//   }
//   return `${username} just logeed in`;
// }
// console.log(loginUserName());

// factorial
// function factorial(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(5));

// function calculateCarPrice(num1) {
//   return num1;
// }
// console.log(calculateCarPrice(2));

// function calculateCarPrice(...num1) {
//   return num1;
// }
// console.log(calculateCarPrice(200, 400, 500));

// function calculateCarPrice(val1, val2, ...num1) {
//   return num1;
// }
// console.log(calculateCarPrice(200, 400, 500, 2000));

// const user = {
//   username: "durgesh",
//   price: 199,
// };
// function handleObject(anyobject) {
//   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }
// // handleObject(user);
// handleObject({
//   username: "same",
//   price: 399,
// });

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(myNewArray));
