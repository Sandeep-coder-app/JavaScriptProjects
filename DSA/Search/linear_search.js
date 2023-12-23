// Linear Search
/*

Give an array arr[] of n elements, write a function to search a give elements x in arr[].
Input:- arr[] = {10, 20, 80, 30, 60, 50, 110, 100, 130, 170}
n = 110;

*/

function search(arr, n, x) {
    for (let i = 0; i < n; i++)
        if (arr[i] == x)
            return i;

    return -1;
}

// Driver Code

const arr = [2, 3, 4, 10, 40];
const x = 101;
const n = arr.length;

// function call
let result = search(arr, n, x);
result == -1
    ? console.log("Elements is not present in array")
    : console.log("Element is present in index " + result);
