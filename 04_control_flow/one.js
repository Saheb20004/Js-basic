const balance=180
if(balance>100) console.log("Test"),console.log("Successful");

//falsy values-----
//false,0,-0,BigInt 0n,"",null,undefined

//truthy values-----
//"0",'flase'," ",[],{},function(){}

/*   false==0     =>true
     false==''    =>true
     0==''        =>true
*/

const myObj={}
if(Object.keys(myObj).length===0){
    console.log("Objecct is empty!!");
}


//Nullish Coalescing Operator(??): null undefined
let val1;
val1=10??21
console.log(val1);

let val2=null??25
console.log(val2);

let val3=undefined??50
console.log(val3);

let val4=null??58??100
console.log(val4);


//Ternary Operator
//Condition ? true : false
const teaPrice=100
teaPrice>=90 ? console.log("More than 90") : console.log("Less than 90");