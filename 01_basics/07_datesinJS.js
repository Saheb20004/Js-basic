let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate=new Date(2025,1,18)
console.log(myCreatedDate.toDateString());

let myCreatedDate2=new Date("2025-02-18")
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate2.toLocaleString());


let myCreatedDate3=new Date("02-18-2025")
console.log(myCreatedDate3.toDateString());
console.log(myCreatedDate3.toLocaleDateString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})



