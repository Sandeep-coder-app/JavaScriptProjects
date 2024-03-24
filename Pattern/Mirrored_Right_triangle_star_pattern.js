function printMirroredRightTriangle(height) {
    for (let i = 1; i <= height; i++) {
        let row = '';
        // Add spaces before stars
        for (let j = 1; j <= height - i; j++) {
            row += ' ';
        }
        // Add stars
        for (let k = 1; k <= i; k++) {
            row += '*';
        }
        console.log(row);
    }
}

// Example usage
printMirroredRightTriangle(5);
