function BubbleSort(arr) {
    let len = arr.length
    for (let i = 0; i < len - 1; i++)
        for (let j = 0; j < len - i - 1; j++)
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
}

function printArray(arr) {
    let len = arr.length
    for (let i = 0; i < len; i++)
        console.log(arr[i])
}

let arr = [64, 34, 25, 12, 22, 11, 90]
BubbleSort(arr)
console.log("Sorted array");
printArray(arr)