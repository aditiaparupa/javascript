const name="aditi"
const repoCount=50
//console.log(name +repoCount + "value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("hel-lo")

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('l'));
const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-5,4)
console.log(anotherString);

const newStringOne=" aditi "
console.log(newStringOne);
console.log(newStringOne.trim()); 

const url = "https://aditi.com/aditi%20aparupa"

console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gameName.split('-'))