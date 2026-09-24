// Arrays 

const myArr = [9,4,12,6,8,7,2]
const myHeros = ["saktiman", "pawan singh"]
console.log(myArr);   // Deep copy _ heap memory means change in main 
console.log(myArr[0]); // Sallow copy _ stack memory means only copy value is used
console.log(myHeros);
console.log(myHeros[2]);

// declare an Array 
const myArr2 = new Array(1,5,6,4)
console.log(myArr2);

// Array method

myArr.push(6) // Add element in an Array
myArr.push(7)
myArr.pop() // remove last element of an Array
console.log(myArr);

myArr.unshift(4)  // its add element in start index so whole array is shifting they may problem in when more informations is here.
myArr.shift() // remove element form start index where the new elements is added

console.log(myArr.includes(9)); // methods to asking question from array
console.log(myArr.indexOf(9));

console.log(myArr.slice(2));
console.log(myArr.splice(1));



 