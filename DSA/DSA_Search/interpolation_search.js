function interpolationSearch(arr, x)
{
    let lo = 0
    let hi = arr.length - 1
    let pos = -1

    while (lo <= hi)
    {
        pos = Math.floor(lo + ((hi - lo) / (arr[hi] - arr[lo]) * (x - arr[lo]))) // iterpolation search formula

        if(arr[pos] == x)
        return pos

        if(arr[pos] < x)
        {
            lo = pos + 1
        }
        else {
            hi = pos - 1
        }
    }
    return -1
}

let arr = [10, 12, 13, 16, 18, 19, 20, 21, 22, 23, 24, 33, 35, 42, 47]

let x = 18

let result = interpolationSearch(arr, x)

// check the element present or not
if (result == -1)
{
    console.log("Element not found");
}
else 
{
    console.log("Element found at index " + result);
}