// concepts of scope in js and its types
//let a = 10
//const b = 20
//var c = 30

//{} // scope

//var c = 300 // it is called global scope it value executed outside block.
let a = 200

if(true) { // a code inside it is called  block scope it is executed inside it value not gone ouside block.
    // block scope cannot be accessed outside the block . block scope can accessed global scope
    let a = 10
    const b = 20
    console.log("INNER:",a);
    
}

//for(let i = 0; i < array.length; i++) {
    //const element = array[i];
//}

function one(){
const username = "himanshu"

function two(){
     const website = "youtube"
     console.log(username);
}
//console.log(website);

two()
}
one()

if(true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = "youtube "
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// ++++++++++++++++ interesting


function addone(num){ // declare a function // we can access a value before declare a function
    return num + 1
}

console.log(addone(5));


const addTwo = function(num){ // declare a function and hold it in varaiable // we cannot access a value before declare
    return num + 2
}
console.log(addTwo(5));
 


//console.log(a);
//console.log(b);
console.log(a);
