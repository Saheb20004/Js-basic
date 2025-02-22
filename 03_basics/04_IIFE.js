//Imediately Invoked Function Expressions(IIFE)
(function chai(){
    console.log(`DB CONNECTED`)
})();           //here we have to add semicolon

(  ()  =>  {
    console.log(`DB CONNECTED TWO`);
}) ();

(  (name)  =>  {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Krish')