const user = {
    userName: "Sandeep Singh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.userName}, welcome to website`);
    }
}

user.welcomeMessage()
user.userName = "Rohit"
user.welcomeMessage()

console.log(this); // {}

// function one() {
//     let userN = "Sand"
//     console.log(this.userN);
// }

// one()

// const one = function () {
//     let userN = "Sand"
//     console.log(this.userN);
// }

// one()

const one = () => {
    let userN = "Sand"
 //   console.log(this.userN);
    console.log(this);
}

one()

const addTwo = (n1, n2) => { // explict return
    return n1 + n2
}

console.log(addTwo(3,5));

const addTwo1 = (n1, n2) => n1 + n2 // implict return

console.log(addTwo1(10, 5));