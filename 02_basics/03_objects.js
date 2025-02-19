//singleton
//object.create

//object literals
const mySym1=Symbol("key1")
const mySym2=Symbol("key2")

const JsUser={
    name:"Aagman",
    "MyName":"Krishnendu Raut",
    age:20,
    mySym1:"mykey1",
    [mySym2]:"mykey2",
    location:"Bihar",
    email:"aagman@123",
    isLoggedin:false,
    LastLoginDays:["Sunday","Monday"]
}
console.log(JsUser.name);
console.log(JsUser["MyName"]);
console.log(JsUser["email"]);
console.log(JsUser.mySym1);
console.log(typeof JsUser.mySym1);
console.log(JsUser[mySym2]);
console.log(typeof JsUser[mySym2]);

JsUser.email="krish@123"
// Object.freeze(JsUser)
JsUser.email="saheb@123"
console.log(JsUser);


JsUser.greeting=function(){
    console.log("Hello Aagman!!");
}
JsUser.greetingTwo=function(){
    console.log(`Hello Aagman!I am ${this.MyName}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


