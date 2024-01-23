const user = new Object() // singleton objects

const user1 = {} // non-singleton objects

user1.id = "123abc"
user1.name = "Sandeep Singh"
user1.isLoggedIn = false

// console.log(user);
// console.log(user1);

// *************************************

const regularUser = {
    email: "Sandeep@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Sandeep",
            lastName: "Singh"
        }
    }
}

// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userFullName);
// console.log(regularUser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

console.log(Object.keys(obj1));
