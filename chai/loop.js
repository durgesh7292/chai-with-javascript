//for loop

// for (let index = 0; index < 10; index++) {
//   const element = index;
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(element);
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop value: ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     // console.log(`inner loop value: ${j} and inner loop ${i}`);
//     console.log(i + "*" + j + "=" + i * j);
//   }
// }

// let MyArray = ["flash", "batman", "superman"];
// for (let index = 0; index < MyArray.length; index++) {
//   const element = MyArray[index];
//   console.log(element);
// }

// break and continue +++++++++++++++++++++++++++++++++++++++++

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected 5`);
//     break;
//   }
//   console.log(index);
// }

// for (let index = 1; index <= 20; index++) {
//   if (index == 5) {
//     console.log(`detected 5`);
//     continue;
//   }
//   console.log(index);
// }

// while +++++++++++++++++++++++++++++++++++++++++++

// let i = 1;
// while (i <= 10) {
//   console.log(`value of i is ${i}`);
//   i = i + 2;
// }

// let MyArray = ["flash", "batman", "superman"];
// let arr = 0;
// while (arr < MyArray.length) {
//   console.log(`value is ${MyArray[arr]}`);
//   arr = arr + 1;
// }

// do while loop +++++++++++++++++++++++++++++++++++++++++++++

// let score = 1;
// do {
//   console.log(`score is ${score}`);
//   score++
// } while (score < 10);

// let score = 11;
// do {
//   console.log(`score is ${score}`);
//   score++;
// } while (score < 10);

// for of +++++++++++++++++++++++++++++++++++++++

// const arr = [1, 2, 3, 4, 5];
// for (const num of arr) {
//   console.log(num);
// }

// const greetings = "hello world!";
// for (const greet of greetings) {
//   console.log(greet);
// }

// maps +++++++++++++++++++++++++++++++++++++++++++++++++++

// const map = new Map();
// map.set("IN", "india");
// map.set("USA", "united state america");
// map.set("FR", "france");
// console.log(map);

// const map = new Map();
// map.set("IN", "india");
// map.set("USA", "united state america");
// map.set("FR", "france");
// for (const key of map) {
//   console.log(key);
// }

// const map = new Map();
// map.set("IN", "india");
// map.set("USA", "united state america");
// map.set("FR", "france");
// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }

// for in +++++++++++++++++++++++++++++++++++++++++++++++++++

// const myObject = {
//   js: "javascript",
//   cpp: "c++",
//   rb: "ruby",
//   swift: "swift by app",
// };
// for (const key in myObject) {
//   console.log(`${key} shortcut is for ${myObject[key]}`);
// }

// const programming = ["js", "rb", "py", "java", "cpp"];
// for (const key in programming) {
//   console.log(programming[key]);
// }

// for each ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const coading = ["js", "rb", "py", "java", "cpp"];
// coading.forEach(function (val) {
//   console.log(val);
// });

// const coading = ["js", "rb", "py", "java", "cpp"];
// coading.forEach((item) => {
//   console.log(item);
// });

// const coading = ["js", "rb", "py", "java", "cpp"];
// function printMe(item) {
//   console.log(item);
// }
// coading.forEach(printMe);

// const coading = ["js", "rb", "py", "java", "cpp"];
// coading.forEach((item, index, arr) => {
//   console.log(item, index, arr);
// });

// const myCoding = [
//   {
//     languagename: "javascript",
//     languagefile: "js",
//   },
//   {
//     languagename: "java",
//     languagefile: "java",
//   },
//   {
//     languagename: "python",
//     languagefile: "py",
//   },
// ];
// myCoding.forEach((item) => {
//   console.log(item.languagename);
// });

// filteruse +++++++++++++++++++++++++++++++++++++++++++++++++

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num > 4;
// });
// console.log(newNums);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

// chaining ++++++++++++++++++++++++++++++++++++++++++++

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumers
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((num) => num >= 41);

// console.log(newNums);

// const reducer +++++++++++++++++++++++++++++++++++++++++++++++++
// const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, currval) {
//   return acc + currval;
// }, 0);
// console.log(myTotal);

// const myNums = [1, 2, 3];
// const myTotal = myNums.reduce(function (acc, currval) {
//   console.log(`acc:${acc} and currval:${currval}`);
//   return acc + currval;
// }, 0);
// console.log(myTotal);

// const myNums = [1, 2, 3];
// const myTotals = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotals);

const shopingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];
const priceTopay = shopingCart.reduce((acc, item) => acc + item.price, 0);
console.log(priceTopay);
