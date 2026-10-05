// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log('DB CONNECTED');
}) (); // Invoke functions
//chai()

// () _ function defintion ()_ function execution

// global scope me kai baar pollution hoti hai to uss Global scope ke pollution ko hatane ke liye ham Immediately Invoked function ka use karte hai.

( () => {
    console.log('DB CONNECTED TO');
}) (); // run code we use explicity;.

// if we write two IIFE together we use ; 

