// concepts of arrow functions and this keyword in js
// this keyword refer to current context

const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
    console.log("welcome to website");
    }
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

// browser object window object 

//function chai(){
    //let username = "himanshu"
   // console.log(this.username);
//}
//chai()

//const chai = function(){
    //let username = "himanshu"
    //console.log(this.username);
//}

const chai = () => { // Arrow function
let username = "himanshu"
console.log(this);
}

//const addTwo = (num1,num2) => { // explict
    //return num1 + num2
//}

//const addTwo = (num1,num2) =>  num1 + num2 // implict
   // return num1 + num2

   //const addTwo = (num1,num2) => (num1 + num2) // declare a array function when we use parentehsis return statement is not neccessary

   const addTwo = (num1,num2) => ({username: "hiamnshu"}) // when we declare object then wrap it in parenthesis



console.log(addTwo(6,5));

const myArray = [2,5,6,4,3]

myArray.forEach(() => {})





//chai()


