//for of loop  => array specific loop
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greetings="Hello World!"
for (const greet of greetings) {
    console.log(greet);   
}

//Maps
const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {
    console.log(key+":-"+value);
    console.log(key,":-",value);
}



const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of myObject) {
    console.log(key,value);                 //myObject is not iterable here
    
}

