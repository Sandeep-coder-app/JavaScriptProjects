let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let removeArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 6) {
        removeArr.push(arr.shift());
    } else {
        break;
    }
}

console.log(removeArr);

/*
The javascript Array filter() method is used to create a new array from a given array consisting of only those
elements from the given array which satisfy a condition set by the argument method.
*/

let array = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];
let limiter = 5;

function retrieveRemoved(ele) {
    return ele < limiter;
}

let removed = array.filter(retrieveRemoved);

console.log("The removed elements are: "+removed);

/*
Using slice() Method
In a function, if there are mulitple return statements only the first return statement gets executed and the function
gets completed.
*/

let array1 = [1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 8];

let limiter1 = 5

let retrieveRemoved1 = function (array1, limiter1) {
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] >= limiter1) {
            return array1.slice(0, i)
        }
    }

    return array1.slice(i)
}

let removed1 = retrieveRemoved1(array1, limiter1)

console.log("The removed elements: " + removed1);
