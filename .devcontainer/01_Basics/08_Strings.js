const name = "hiamanshu"
const repoCount = 50

console.log(name + repoCount + "Value" );

// if we concenate two string in modern javascript we use Backtics_String INterpolation we make placeholders and inject the value of variables inside it.




const gameName = new String('himanshu-c') 

console.log(gameName[0]); // Access key value pairs


console.log(gameName.__proto__); // its give objects


console.log(gameName.length);


console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("i"));
console.log(gameName.indexOf('u'));

const newString = gameName.substring(0,4); // negative value are not allowed
console.log(newString); 

const anotherString = gameName.slice(-8,4); // slice method also include negative value and its start printing from reverse direction
console.log(anotherString);

const newStringOne = "   himanshu  "
console.log(newStringOne.trim()); // its removes starting and end space

const url ="https://himanshu.com/himanshu%20pandey"

console.log(url.replace('%20','-'))

// in split method we require one seperator and one limit 

console.log(url.includes('sudama'))

console.log(gameName.split('-'));