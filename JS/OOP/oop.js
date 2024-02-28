const user = {
  userName: "Sandeep Singh",
  count: 10,
  signIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
  },
};

// console.log(user.getUserDetails());

// ES6

// class User {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUserName() {
//     return `${this.userName.toUpperCase()}`;
//   }
// }

// const ch = new User("Sandeep", "Sand@gmail.com", "123");

// console.log(ch.encryptPassword());

// console.log(ch.changeUserName());

// behind the scene

function User(userName, email, password) {
  this.userName = userName;
  this.email = email;
  this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUserName = function () {
    return `${this.userName.toUpperCase()}`;
}


const t = new User("Rohit", "Rohit@mail.com", "456")

console.log(t.encryptPassword());
console.log(t.changeUserName());