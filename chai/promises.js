// const promiseOne = new Promise(function (reslove, reject) {
//   //DB an async task
//   //DB calls ,cryptography,network
//   setTimeout(function () {
//     console.log("Async task is complete");
//     reslove();
//   }, 1000);
// });
// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// type-2 ++++++++++++++++++++++++++++++++++++

// new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     console.log("Async task 2 complete");
//     reslove();
//   }, 1000);
// }).then(function () {
//   console.log("promise 2 consumed");
// });

// type-3 ++++++++++++++++++++++++++++++++++++++++++++++++
// const promiseThree = new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     reslove({ username: "durgesh", gmail: "du@gmail.com" });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user);
// });

// type-4 +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const promiseFour = new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       reslove({ username: "durgesh", gmail: "du@gmail.com" });
//     } else {
//       reject("ERROR: something in wrong");
//     }
//   }, 1000);
// });
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => console.log("the promise either resolvd or rejected"));

// type-5 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const promiseFive = new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       reslove({ username: "Javascript", password: "123" });
//     } else {
//       reject("ERROR: JS in wrong");
//     }
//   }, 1000);
// });
// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

//fetch try-catch +++++++++++++++++++++++++++++++++++++++++++++++++++++++
// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data =await  response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

//fetch then catch method
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));
