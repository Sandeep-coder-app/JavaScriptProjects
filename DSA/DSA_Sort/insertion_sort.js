 // Insertion Sort
 function InsertionSort(arr)
 {
    let len = arr.length
    for (let i = 1; i < len; i++)
    {
        let key = arr[i]
        let j = -1

        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j]
            j = j - 1
        }
        arr[j + 1] = key
    }
 }

 function printArray(arr)
 {
    let len = arr.length
    for (let i = 0; i < len; i++)
    console.log(arr[i])
 }

 let arr = [12, 11, 13, 5, 6]
 InsertionSort(arr)
 console.log("Sorted Array");
 printArray(arr)