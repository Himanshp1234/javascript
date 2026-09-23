//Dates

let myDate = new Date()
console.log(myDate); // output is: 2026-09-23T14:20:27.569Z

console.log(myDate.toString()); // to convert dates into string output is: Wed Sep 23 2026 14:24:31 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toDateString()); // this is method to represent date output is: Wed Sep 23 2026

console.log(myDate.toISOString()); // output is : 2026-09-23T14:24:31.172Z

console.log(myDate.toJSON()); // output is: 2026-09-23T14:24:31.172Z

console.log(myDate.toLocaleDateString()); // output is : 9/23/2026

console.log(myDate.toLocaleString()); // output is : 9/23/2026, 2:24:31 PM

console.log(typeof myDate); // output is : object

let myCreatedDate = new Date(2026,0,23);
console.log(myCreatedDate); // output is : 2026-01-23T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // output is : Fri Jan 23 2026

let myCreatedDate2 = new Date(2026,8,23,8,3);
console.log(myCreatedDate2.toLocaleString()); // output is:  9/23/2026, 8:03:00 AM

let myCreatedDate3 = new Date("2026-03-27"); // year_month_date
console.log(myCreatedDate3.toLocaleString()); // output is : 3/27/2026, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // output in (ms): 1790174720471

console.log(myCreatedDate.getTime()); // output in (ms): 1769126400000

console.log(Date.now()); //output: 1790175025534

console.log(Math.floor(Date.now()/1000)); // output are in second : 1790175224

let newDate = new Date() 
console.log(newDate);
console.log(newDate.getDate()); // output is : 23
console.log(newDate.getMinutes()); // output is : 59
console.log(newDate.getMonth() + 1); // output is : 9
console.log(newDate.getDay()); // output is: 3

newDate.toLocaleString('default', {
weekday: "long",

});

 










