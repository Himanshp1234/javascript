 function calculateCartPrice(...num1){ // ... called rest operator
    return num1

 }
 //console.log(calculateCartPrice(200,400,600));

 const user = {
     username: "himanshu",
     price: 199
 }

 function handleObject(anyobject){
    console.log('Usermane is ')
 }
handleObject(user) // when we deal this type of method we can maintain type safety
handleObject({
    username: "sima",
    price: 300
})

const myNewArray = [200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));

// we can declare both object and array in functions