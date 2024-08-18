//object literals
const mySym = Symbol("key1");
// const JsUser = {
//   name: "durgesh",
//   "full name": "durgesh kr choudhary",
//   [mySym]: "mykey1",
//   age: 20,
//   location: "Darbhanga",
//   email: "durgeshkumarchy@gmail.com",
//   isLoggedIn: false,
//   lastLoginDays: ["monday", "saturday"],
// };
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// JsUser.email = "hiteshchy@gmail.com";
// Object.freeze(JsUser);
// JsUser.email = "bipinchy@gmail.com";
// console.log(JsUser);

// JsUser.greeting = function () {
//   console.log("hello js user");
// };

// JsUser.greetingTwo = function () {
//   console.log(`hello js user ${this.name}`);
// };

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// //const tinderUser=new Object();
// const tinderUser = {};
// tinderUser.id = "123abc";
// tinderUser.name = "durgesh";
// tinderUser.isLoggedIn = false;

//console.log(tinderUser);

// const regularUser = {
//   email: "du@gmail.com",
//   fullname: {
//     userfullname: {
//       firstname: "durgesh",
//       lastname: "choudhary",
//     },
//   },
// };
// console.log(regularUser.fullname);

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "a", 4: "b" };
//const obj3 = Object.assign(obj1, obj2);
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// database se jab aata h
// const users=[
//     {
//     id:1,
//     email:"durgesh@gmai.com"
//    },
//    {
//     id:1,
//     email:"durgesh@gmai.com"
//    },
//    {
//     id:1,
//     email:"durgesh@gmai.com"
//    },
// ]

// const course = {
//   coursename: "js in hindi",
//   price: "999",
//   courseInstructor: "durgesh",
// };
// const { courseInstructor: instructor } = course;
// console.log(instructor);


// json eis tarika se hota h
// {
//     "coursename": "js in hindi",
//    "price": 999,
//    "courseInstructor": "durgesh",
// }