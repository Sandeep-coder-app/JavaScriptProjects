// function with objetcs
// (...)rest operator or spread operator

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(10,500,300));

const user = {
    userName: "Sandeep Singh",
    prices: 909
}

function handleObject(anyObject) {
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user)