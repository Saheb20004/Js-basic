const user1=new Object()
const user2={}
console.log(user1);
console.log(user2);

user1.id="krish@123"
user1.name="Krish"
user1.isLoggedIn=false
console.log(user1);

const realUser={
    email:"krish@123",
    fullname:{
        userfullname:{
            firstname:"Krishnendu",
            lastname:"Raut"
        }
    }
}
console.log(realUser);
console.log(realUser.fullname.userfullname.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

const obj5={obj1,obj2}
const obj3=Object.assign(obj1,obj2)
const obj4=Object.assign({},obj1,obj2)
const obj6={...obj1,...obj2}
console.log(obj3);
console.log(obj4);
console.log(obj5);
console.log(obj6);



console.log(user1);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log((Object.entries(user1)));

console.log(user1.hasOwnProperty("isLoggedIn"));
console.log(user1.hasOwnProperty("isIn"));

//+++++++++++++++++++++++++


const course={
    coursename:"JS",
    price:999,
    courseinstractor:"Hitesh sir"
}
console.log(course.courseinstractor);

const {courseinstractor}=course       //destructuring process
console.log(courseinstractor);

const {courseinstractor:instructor}=course
console.log(instructor);

    /*
{
    "coursename":"JS",
    "price":"free",
    "courseinstractor":"Hitesh sir"
}
    */

