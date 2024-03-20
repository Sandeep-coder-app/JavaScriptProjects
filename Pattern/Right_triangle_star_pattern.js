// const n = 5

// console.log('Print the Right Triangle Star Pattern');

// for(let i = 1; i <= n; i++) {
//     for(let j = 1; j <= i; j++) {
//         console.log('*');
//     }
//     console.log("\n");
// }

function printRightTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row);
    }
}

// Example usage
printRightTriangle(5);
