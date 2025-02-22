//for in loop
const myObject={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift by apple"
}
for (const key in myObject) {
   console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming=["js",'rb','py','cpp','java']
for (const key in programming) {
    console.log(`${key}:${programming[key]}`);
}

//Maps
const map =new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
console.log(map);

for (const key in map) {
    console.log(key);       //We can't iterate maps using for-in loop
} 