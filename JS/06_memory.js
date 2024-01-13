// stack (primitive), Heap (Non-primitive)

let name1 = "Sandeep Singh"

let anothername = name1

anothername = "Akash Yadav"

console.log(anothername);
console.log(name1);

// Heap

let user = {
    email: "sandeep@gmail.com",
    upi: "user@21",
}

let userTwo = user
userTwo.email = "app@gmail.com"
console.log(userTwo.email);
console.log(user.email);