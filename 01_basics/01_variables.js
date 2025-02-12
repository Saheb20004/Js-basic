const accountId=12345
let accountEmail="Krishnenduraut2004@gmail.com"
var accountPassword="12435"
accountCity="Purba Medinipur"
let accountState

// accountId=648   //not allowed as we can't change constant value

console.log(accountId)

/*
prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountPassword,accountState])