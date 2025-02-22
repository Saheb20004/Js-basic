const coding=["js","ruby","java","python","cpp"]

console.log("1----------");
coding.forEach(function (item){
    console.log(item);
    
})

console.log("2----------");
coding.forEach((item)=>{
    console.log(item);   
})

console.log("3----------");
function printMe(item){
    console.log(item);  
}
coding.forEach(printMe)

console.log("4----------");
coding.forEach((item,index,arr) => {
    console.log(item,index,arr);
})


const myCoding=[
    {
        LanguageName:"javascript",
        LanguageFileName:"js"
    },
    {
        LanguageName:"java",
        LanguageFileName:"java"
    },
    {
        LanguageName:"python",
        LanguageFileName:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.LanguageName);
    
})

