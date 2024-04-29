const accountId=144553 
let accountEmail="aditi@google.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;
/*
prefer not to use var because issue in block scope and functional scope
*/

//accountId=2 //not allowed
accountEmail="hc@hc.com"
accountPaaword="21212121"
accountCity="puri"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])