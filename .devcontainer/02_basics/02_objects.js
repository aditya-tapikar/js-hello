
// object literals

const jsUser= {

    name:"ADITYA",
    age:18,
    location:"jabalpur",
    email:"dsdsd@gmail.com",
    loggedin:false


}

console.log(jsUser.email)
console.log(jsUser["email"])  // better way to access

//overwriting

jsUser.email="aditya@gmail.com"

console.log(jsUser["email"])  

//functions in objects

jsUser.greeting=function(){

    console.log("HELLO JS USER")

    


}

