// JavaScript program to sort the elements of an array in ascending order

const arr = [5, 2, 8, 7, 1]
let temp = 0

console.log("Original Array: ");
for (const i in arr) {
    console.log(arr[i]);
}


for(let i = 0; i < arr.length; i++) {
    for(let j = i + 1; j <arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }
}

console.log("Array after sorting: ");
for (const i in arr) {
    console.log(arr[i]);
}
