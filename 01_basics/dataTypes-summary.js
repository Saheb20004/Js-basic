// Primitive: 7 types-String,Number,Boolean,null,undefined,symbol,BigInt

let score=null
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId)

const bigNumber=2151411651345413514482n
console.log(typeof bigNumber);

//Non-Primitive(Reference): Arrays,Objects,Functions

const heros=["Shaktiman","Tony Stark","Thor"]
let myObj={
    name:"Krish",
    age:21,
}
const myFunction=function(){
    console.log("Hello world!!")
}
console.log(typeof myFunction)
console.log(typeof score)
console.log(typeof heros)
console.log(typeof id);

//link for reading- https://262.ecma-international.org/5.1/#sec-11.4.3
