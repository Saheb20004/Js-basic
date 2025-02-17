const name="Krish"
const repo=5
console.log(`Hello my name is ${name} and my repo count is ${repo}`);


const gameName=new String('Krish-nendu-Raut')
console.log(gameName[0]);
console.log(gameName.__proto__)
console.log(gameName);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2))
console.log(gameName.indexOf('i'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="           Krish        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://krishnendu.com/krishnendu%20raut"
console.log(url.replace('%20','-'));
console.log(url.includes('krish'));
console.log(gameName.split('-'));


