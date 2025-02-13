let score1="21Krish"
console.log(typeof score1)
console.log(typeof(score1))
let valueInNumber1=Number(score1)
console.log(typeof valueInNumber1)
console.log(valueInNumber1)  //Not a Number(NaN)

let score2=21
console.log(typeof score2)
console.log(typeof(score2))
let valueInNumber2=Number(score2)
console.log(typeof valueInNumber1)
console.log(valueInNumber2)

let score3="Krish"
console.log(typeof score3)
console.log(typeof(score3))
let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3)
console.log(valueInNumber3)

let score4=null
console.log(typeof score4)
console.log(typeof(score4))
let valueInNumber4=Number(score4)
console.log(typeof valueInNumber4)
console.log(valueInNumber4)

let score5=undefined
console.log(typeof score5)
console.log(typeof(score5))
let valueInNumber5=Number(score5)
console.log(typeof valueInNumber5)
console.log(valueInNumber5)

let score6=true
console.log(typeof score6)
console.log(typeof(score6))
let valueInNumber6=Number(score6)
console.log(typeof valueInNumber6)
console.log(valueInNumber6)

//"21"=>21
//"21Krish"=>NaN
//true=>1; false=>0

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

let isLoggedIn1=""
let booleanIsLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanIsLoggedIn1)

let isLoggedIn2="Krish"
let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2)

let someNumber=21
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)


let str1="Hello"
let str2="Krish"
let str3=str1+str2
console.log(str3)

console.log("1"+2)
console.log(1+"2");
console.log(1+2+"2");
console.log("1"+2+2);
console.log(true)
console.log(+true)
console.log(+"")



/*link to study
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
*/