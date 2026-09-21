 // JavaScript is a dynamically typed language //

 // primitive datatypes

 // 7 types : String ,Number,Boolean,null,undefined,symbol,BigInt

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn =  false
 const outsideTemp = null   // it gives Object datatypes
 let userEmail;   // its gives undefined datatypes

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId);


 const bigNumber = 345656893614256n

 // Reference(Non_Primitive) data types

 // Array,Objects,Functions 
 // every Reference data types return Object datatypes

 const heros = ["sahid","naagraj","doga"];
let myObj =  {
    name: "himanshu",
    age: 22,
    
 }

const myFunction = function() { // its return Object function return type
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof userEmail);
console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);


