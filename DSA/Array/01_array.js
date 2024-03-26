// Print all the element given in the array

const arr = [1,2,3,4,5,10]

console.log("For-loop");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("For-each");
arr.forEach(element => {
    console.log(element);
});

console.log("For-In");
for (const key in arr) {
    console.log(arr[key]);
}

console.log("For-of");
for (const iterator of arr) {
    console.log(iterator);
}
