function sort(arr, l, r)
{
    if(l < r)
    {
        let mid = Math.floor((l + r) / 2)
        sort(arr, l, mid)
        sort(arr, mid + 1, r)
        merge(arr, l, mid, r)
    }
}

function merge(arr, l, mid, r)
{
    let n1 = mid - l + 1
    let n2 = r - mid
    let L = [n1]
    let R = [n2]

    for (let i = 0; i < n1; i++)
    L[i] = arr[l + i]

    for (let j = 0; j < n2; j++)
    R[j] = arr[mid + 1 + j]

    let i = 0, j = 0
    let k = l

    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i]
            i++
        } else {
            arr[k] = R[j]
            j++
        }
        k++
    }

    while (i < n1)
    {
        arr[k] = L[i]
        i++
        k++
    }

    while (j < n2)
    {
        arr[k] = k[j]
        j++
        k++
    }
}

function printArray(arr)
{
    let len = arr.length
    for (let i = 0; i < len; i++)
    console.log(arr[i]);
}


let arr = [12, 11, 13, 5, 6, 7]

sort(arr, 0, arr.length - 1)
console.log("Sorted Array");
printArray(arr)
