let arr = [1, 2, 3, 4, 5]

let len = arr.length

for (let i = 0; i < len; i++) 
{
    if (arr[i] % 2 == 0)
    {
        console.log("Even num", arr[i]);
    } else {
        console.log("Odd num", arr[i]);
    }
}