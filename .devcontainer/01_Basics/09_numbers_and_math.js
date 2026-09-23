const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(3)); //  its gives precise value of 3 digits other digits are round off priority gives in left part of decimal value 
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++  Maths concepts +++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // its convert negative value in positive

console.log(Math.round(4.6)); // its gives roundoff value according to nearest integer

console.log(Math.ceil(4.2)); // its gives round off value of upper integer // its chooses top value  output is : 5

console.log(Math.floor(4.2)); // its choses bottom value  output is: 4
console.log(Math.floor(4.9)); // output is : 4

console.log(Math.pow(5)); // its gives it power value

console.log(Math.min(4,5,3,6));  // its gives us its minimum value present in array for output

console.log(Math.max(7,8,2,6)); // its gives us its maximum value present in array for output

console.log(Math.random()); // its output values always occur between 0 and 1
console.log((Math.random()*10) + 1); // min value is 1
console.log(Math.floor(Math.random()*10) + 1); // its gives value 0 but min case is 1 so 1 is add in result

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // formula to find random value we use max and min to find range and add 1 means neglect 0 and avoid min value we add min value in result 
       



