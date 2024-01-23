// object literals


// symbol
const mySm = Symbol("Key1");

const JsUser = {
    name: "Sandeep Singh",
    "anotherName": "askash yadav",
    [mySm]: "MyKey1", // symbol
    age: 25,
    email: 'app@gmail.com',
    isLoggedIn: false,
    lastLoginDay: ['Monday', 'saturday']
}


console.log(JsUser.name);
console.log(JsUser['email']);
console.log(JsUser['anotherName']);
console.log(JsUser[mySm]);

JsUser.email = "appdev@gmail.com";
// Object.freeze(JsUser) // object freeze

JsUser.email = "mobiledev@gmail.com";

console.log(JsUser);


console.log();

JsUser.greeting = function() {
    console.log("Hello JS user");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());




