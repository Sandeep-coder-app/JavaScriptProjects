// Program to implement the Menu based calculator

const prompt = require("prompt-sync")();


let num1, num2
let opt
num1 = prompt("Enter the first no: ")
num2 = prompt("Enter the second no: ")


console.log("1.Addition\n 2.Substraction\n 3. Multiplication\n 4. Division\n 5. Exit");
opt = prompt("Enter your option: ")

switch (opt) {
    case 1:
        console.log("Addition of two no: ", num1 + num2);
        break;

        case 2:
            console.log("Substraction of two no: ", num1 - num2);
            break;

            case 3:
                console.log("Multiplication of two no: ", num1 * num2);
                break;

                case 4:
                    console.log("Division of two no: ", num1 / num2);
                    break;
                    
                    case 5:
                        return 0

                        default:
                            console.log("Enter the wrong input");
                            break;
}