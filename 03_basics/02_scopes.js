//{}  ->  scope
let a=300
if(true){
    let a=10   /*we can't use the value of a variable outside the scope in which     
                 it is defined using let or const keyword     */
    const b=21
    var c=100 /*If we initialize a variable using var keyword inside a scope then
              we can use the value of the variable inside as well as outside of the scope*/
    console.log("Inside the scope,a =",a);
    
}
console.log("C=",c);
console.log("Outside the scope,a =",a);


//+++++++++++++++Scope level & mini hoisting++++++++++++++++++++
function one(){
    const username="Krish"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const username="Krish"
    if(username==="Krish"){
        const website=" youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);




//+++++++++++++++++interesting++++++++++++++++++++++
console.log(addOne(20));
function addOne(num){
    return num+1
}
console.log(addOne(20));

// console.log(addTwo(20));          hoisting
const addTwo=function(num){
    return num+2
}
console.log(addTwo(20))
