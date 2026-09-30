// there are two types we declare an onject first literal type and second constructorn type 
// singleton _ an object created by an constructor always form singleton 

// object literals
// object.create_ it is a constructor 
// oject_ key and value concept is applied

const mySym = Symbol("key1") // taking a symbol

const jsUsers = {
    name: "Himanshu",
    "full name": "Himanshu pandey",
    [mySym]: "mykey1", // act as a key
    location: "Greater noida",
    email: "himanshu.1537gmial.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(jsUsers.email) // access object 

console.log(jsUsers["email"]) // to access object it is good way
console.log(jsUsers["full name"]) // only one option to access full name by using square notation
console.log(jsUsers.mySym);
console.log(typeof jsUsers.mySym); //  output_ string but except output are in symbol so if we want that output are in symbol form there are only one option make the symbol notation in square notation
console.log( jsUsers[mySym]); // print symbol

jsUsers.email = "himanshu@chatgpt.com" // to change the value
Object.freeze(jsUsers) // we cannot modified the value
jsUsers.email = "hiamnshu@microsoft.com"
console.log(jsUsers);

jsUsers.greeting = function(){
   // console.log("hello js users");
}

jsUsers.greetingTwo = function(){
    //console.log('hello js user, ${this.name}'); // same object refer by this keyword and the process i used to define the string is called string manipulation 
}

//console.log(jsUsers.greeting); // gives undefined value 
//console.log(jsUsers.greeting());
//console.log(jsUsers.greetingTwo());

// singleton 

const tinderUser = new Object() // singleton object
tinderUser.id = "12345"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "soma@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hiamsnhu",
            lastname: "pandey"
        }
    }

}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname);
//console.log(regularUser.fullname.userfullname.firstname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

//const obj3 = {obj1,obj2}
//const obj3 = Object.assign({},obj1,obj2) // {} behaves as target and obj1 and obj2 behaves as as source 

const obj3 = {...obj1,...obj2}; // use spread method
console.log(obj3)

// some method of objects 