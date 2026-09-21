// Stack(Primitive) ,Heap (non_Primitive) -- Types of memory 
// Primitive datatypes = Stack _ copy value 
// Non_Primitive datatypes = Heap _ reference - actually change and update in original value.

let myYoutubename = "himanshupandey.com"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);

