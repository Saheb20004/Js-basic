//for loop

for (let i = 0; i <=10; i++) {
    console.log(`Outer loop value:${i}`);
    for (let j = 0; j <=2; j++) {
        console.log(`Inner loop value ${j}, and inner loop ${i}`);   
    }
}
console.log("Table of 1 to 10");

for (let i = 1; i <=10; i++) {
    for (let j = 1; j <=10; j++) {
        console.log(i +"*"+j+"="+i*j);   
    }
}


const array=["Ironman","Spiderman","Thor"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}


//break , continue