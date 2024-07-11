//IMMEDIATELY INVOKED FUNCTION EXPRESSION

// NORMAL DECLARATION

// function chai(){

//     console.log("DB CONNECTED")
// }

// chai()

// by iife


(function chai(){

    console.log("DB CONNECTED")
}) ();


(  (name)=>{

    console.log(`hi i am ${name} `)
}) ("ADITYA")


