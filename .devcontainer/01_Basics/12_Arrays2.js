//Arrays works as 
const myArr = {2:4}
console.log(myArr);

const myArr2 = [2,5,4,6,9,"Himanshu"]
console.log(myArr2.includes(9));
console.log(myArr2.indexOf(9));

const newArr = myArr2.join()

console.log(myArr2);
console.log(typeof myArr2);

// slice , splice
console.log("A",myArr2);

const myn1 = myArr2.slice(1,3)

console.log(myn1); // output is : [ 5, 4 ]
 

// important methods of arrays

const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

marvel_heros.push(dc_heros); // push into existing array
console.log(marvel_heros);
console.log(marvel_heros[3[1]]);

const allHeros = marvel_heros.concat(dc_heros); // return new heros and mergge both arrays
console.log(allHeros);  

const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros); // retun single single element and its also concantes the element 

const another_array = [1,2,3, [4,5,6], 7 , [6,7, [4,5]]]

const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Himanshu")) // not treated as an array
console.log(Array.from("Himanshu")) // then treat as an array
console.log(Array.from({name: "himanshu"})) // gives empty value to make arrays we use key

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1,score2,score3));





 
