// Immediately Invoked Function Expressions (IIFE)

(function one() { // named IIFE
    console.log(`DB CONNECTED`);
})();


( () => { // unnamed iife
    console.log(`DB CONNECTED TWO`);
}) ();

( (name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('Sandeep Singh')