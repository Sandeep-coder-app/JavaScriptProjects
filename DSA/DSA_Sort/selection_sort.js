function sort(arr) {
    let n = arr.length
    for (let i = 0; i < n - 1; i++) {
        let min_idx = i
        for (let j = i + 1; j < n; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j

        let temp = arr[min_idx]
        arr[min_idx] = arr[i]
        arr[i] = temp
    }
}

function printArray(arr) {
    let n = arr.length
    for (let i = 0; i < n; i++)
        console.log(arr[i]);
}

let arr = [64, 25, 12, 22, 11]
sort(arr)
console.log('Sorted array');
printArray(arr)