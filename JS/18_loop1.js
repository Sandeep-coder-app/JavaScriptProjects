const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums =  myNumbers.map( (val) => { return val + 10})

const newNums = myNumbers
           .map( (val) => val * 10 )
           .map( (val) => val + 1)
           .filter( (val) => val >= 40)
           
console.log(newNums);