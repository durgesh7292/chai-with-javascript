// object literal
// const user = {
//   username: "durgesh",
//   loginCount: 8,
//   signedId: "true",
//   getUserDetails: function () {
//     console.log("Got user dtails from database");
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails);

// this keyword ++++++++++++++++++++++++++
// const user = {
//   username: "durgesh",
//   loginCount: 8,
//   signedId: "true",
//   getUserDetails: function () {
//     console.log(`Username:${this.username}`);
//   },
// };
// console.log(user.username);
// console.log(user.getUserDetails());

// constructor function
function User(username, isLoggedIn, loginCount) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greeting = function () {
    console.log(`Welcome:${this.username}`);
  };
  return this;
}
const userOne = new User("Durgesh", 12, true);
console.log(userOne);
const userTwo = new User("chai", 121, false);
console.log(userTwo);
