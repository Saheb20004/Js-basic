const user={
    username:"Aagman",
    price:210,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
user.welcomeMessage();
user.username="Krish";
user.welcomeMessage()

console.log(this)



// function one(){
//     let username="Saheb"
//     console.log(this.username);
// }
// one()

// function two(){
//     let username="Saheb"
//     console.log(this.username);
// }
// two()


//Arrow function
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4));

//implicit return
const addTwo2=(num1,num2)=> (num1+num2)
console.log(addTwo(10,21));

const name=()=>({
    username:"Krish"
})
console.log(name());


