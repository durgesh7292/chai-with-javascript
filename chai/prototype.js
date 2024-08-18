// new keyword ++++++++++++++++++++++++++++++
// function multiply5(num) {
//   return num * 5;
// }
// multiply5.power = 2;
// console.log(multiply5(5));
// console.log(multiply5.power);
// console.log(multiply5.prototype);

// function createUser(Username, score) {
//   this.Username = Username;
//   this.score = score;
// }
// createUser.prototype.increment = function () {
//   this.score++;
// };
// createUser.prototype.printMe = function () {
//   console.log(`score is ${this.score}`);
// };
// const chai = new createUser("chai", 25);
// const tea = new createUser("tea", 250);

// prototype +++++++++++++++++++++++++++++++++++++++++++
//let myName = "hitesh";
//let myChannel = "chai";
// console.log(myName.trueLength);

// let myHeros = ["thor", "spiderman"];

// let heroPower = {
//   thor: "hammar",
//   spiderman: "sling",
//   getSpiderPower: function () {
//     console.log(`spidey power is:${this.spiderman}`);
//   },
// };
// Object.prototype.hitesh = function () {
//   console.log(`hitesh in persent in all object`);
// };
// Array.prototype.heyHitesh = function () {
//   console.log(`Hitesh says hello`);
// };
// //heroPower.hitesh();
// myHeros.hitesh();
// myHeros.heyHitesh();
// //heroPower.heyHitesh();

//Inheritance ++++++++++++++++++++++++++++++

// const User = {
//   name: "chai",
//   email: "du@gmail.com",
// };
// const Teacher = {
//   makeVideo: true,
// };
// const TeachingSupport = {
//   isAvaliable: false,
// };
// const TAsupport = {
//   makeAssignment: "Js assignment",
//   fullTime: true,
//   __proto__: TeachingSupport,
// };
// Teacher.__proto__ = User;
// // modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUserName = "chaiaurcode         ";
String.prototype.trueLength = function () {
  console.log(`${this.name}`);
  console.log(`True length is :${this.trim().length}`);
};
anotherUserName.trueLength();
"durgesh".trueLength();
