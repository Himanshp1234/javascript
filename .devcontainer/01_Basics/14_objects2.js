// object destructure
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
    
}
//course.courseInstructor

const {courseInstructor: Instuctor} = course // de_structure of object courseInstructor: Instructor

//console.log(courseInstructor); // output _ hitesh
console.log(Instuctor); // output _ hitesh

const navbar = ({company}) => { // {} denotes destructuring of objects
     
}
navbar(company = "hitesh")

//concept of Api _ Apna kaam kisi aur ke sir pr Api _ kuch value aati hai backend se usse ham kaise likhte hai ye concepts hota hai api ka

//{ // JSON
// proper structure of json contains key and value both are string 
    //name: "himanshu",
    //coursename: "js in hindi",
    //price: "free"

//}
[
    {},
    {},
    {}
]


