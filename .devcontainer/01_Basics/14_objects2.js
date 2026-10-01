// object destructure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
    
}
//course.courseInstructor

const {courseInstructor: Instuctor} = course

//console.log(courseInstructor); // output _ hitesh
console.log(Instuctor); // output _ hitesh

const navbar = ({company}) => { // {} denotes destructuring of objects
     
}
navbar(company = "hitesh")

//concept of Api

//{
    //name: "himanshu",
    //coursename: "js in hindi",4
    //price: "free"
//}
