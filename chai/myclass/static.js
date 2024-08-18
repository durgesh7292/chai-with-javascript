class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME:${this.username}`);
  }
  static createId() {
    return `123`;
  }
}
const hitesh = new User("hitesh");
hitesh.createId();
console.log(hitesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}
const iphone = new Teacher("iphone", "du@gmail.com");
console.log(iphone.createId());
