function myName(){
    console.log("K");
    console.log("r");
    console.log("i");
    console.log("s");
    console.log("h"); 
}
myName()

function addTwoNumbers(num1,num2){
    console.log(num1+num2)
}
addTwoNumbers(21,10)
const result=addTwoNumbers(21,5)
console.log("Result:",result);

function addTwoNumbers2(num1,num2){
    return (num1+num2)
}
console.log(addTwoNumbers2(12,10));


//function using string interpolation
function loginMessage(username){
    if(username===undefined){
        console.log("Please enter a username!!");
        return
    }
    return `${username} just logged in`      //string interpolation
}
console.log(loginMessage("Krishnendu"));
console.log(loginMessage());




function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,400,600));


//pass object in function as a parameter
const user={
    username:"Krish",
    price:21
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user)
handleObject({
    username:"Raut",
    price:10
})

//pass array as a parameter of function
const myArray=[1,2,3,4,5,6]
function getArrayValue(arr){
    return arr[5]
}
console.log(getArrayValue(myArray));
