const myNums = [1, 2, 3, 4]

// const total = myNums.reduce(function (acc, currentValue) {
//     console.log(`acc: ${acc} and currentValue: ${currentValue}`);
//     return acc + currentValue
// }, 0)

const total = myNums.reduce( (acc, curr) => acc+curr, 0)

// console.log(total);

const ShoppingCart = [
    {
        itemName: "Js Course",
        itemPrice: 999,
    },
    {
        itemName: "Java Course",
        itemPrice: 599,
    },
    {
        itemName: "Python Course",
        itemPrice: 1000,
    },
    {
        itemName: "Android dev Course",
        itemPrice: 5000,
    },
    {
        itemName: "Web Dev Course",
        itemPrice: 6000,
    },
    {
        itemName: "Data Science Course",
        itemPrice: 80000,
    },
]

const price = ShoppingCart.reduce( (acc, item) => acc + item.itemPrice, 0)

console.log(price);