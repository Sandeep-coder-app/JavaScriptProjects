function search(arr, x) {
    for (let i = 0; i < arr.length; i++)
        if (arr[i] == x)
            return i

    return -1
}

let arr = [2, 3, 4, 10, 40]
let x = 10

let result = search(arr, x)

if (result == -1)
    console.log("Element is not present");
else
    console.log("Element at present index ", result);