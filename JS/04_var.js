/* 
javascripts var statement is used to declare variable in javascript that are function-scoped.
The var statement is also used to decaler global-scoped variables.

Before the intro of ES6 all the keywords in javascripts
*/

var test1= 12, test2 = 14, test3 = 16

function foo() {
    console.log(test1, test2, test3);
}

foo()


console.log(test4)

var test4 = 55