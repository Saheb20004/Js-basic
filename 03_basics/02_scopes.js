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