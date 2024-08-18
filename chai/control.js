//if
// const isUserloogedIn = true;
// if (isUserloogedIn) {
// }

// operator
//<,>,<=,>=,==,!=,===,!=

// if (2 == "2") {
//   console.log("executed");
// }

// if (2 != 3) {
//   console.log("executed");
// }

// if else

// const temperture = 41;
// if (temperture < 50) {
//   console.log("less then 50");
// } else {
//   console.log("tempertue is greater then 50");
// }

// const score = 200;
// if (score > 100) {
//   const power = "fly";
//   console.log(`User power:${power}`);
// }
// console.log(`User power:${power}`);

//const balance = 1000;
// if (balance > 500) console.log("test");

//else if
// const balance = 1000;
// if (balance < 500) {
//   console.log("less then 500");
// } else if (balance < 750) {
//   console.log("less then 750");
// } else if (balance < 900) {
//   console.log("less then 900");
// } else {
//   console.log("less then 1200");
// }

// const userloogedIn = true;
// const debitCard = true;
// const loggedInFromGoogle = false;
// const loggedInFromEmail = true;
// if (userloogedIn && debitCard) {
//   console.log("Allow to by courses");
// }

// if (loggedInFromGoogle || loggedInFromEmail) {
//   console.log("User logged in");
// }

// switch statement

// switch (key) {
//   case value:
//     break;
//   default:
//     break;
// }

// const month = 3;
// switch (month) {
//   case 1:
//     console.log("january");
//     break;
//   case 2:
//     console.log("february");
//     break;
//   case 3:
//     console.log("march");
//     break;
//   case 4:
//     console.log("april");
//     break;
//   default:
//     console.log("default case match");
//     break;
// }\

// truthy value

// const userEmail = "dur@gmail.com";
// if (userEmail) {
//   console.log("Got user email");
// } else {
//   console.log("Don't have user email");
// }

// const userEmail = [];
// if (userEmail.length === 0) {
//   console.log("Array is empty");
// }

// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//   console.log("object is empty");
// }

// Nullish coalesing Operator(??) null , undefined

// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
//val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;
// console.log(val1);

// Terinay Operator

// condition ? true:false
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less then 80") : console.log("more then 80");
