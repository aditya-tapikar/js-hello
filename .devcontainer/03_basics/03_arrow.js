
// this represents current context

const user={

    username:"aditya",
    price:999,

    welcomeMessage :function(){


        //console.log(`${this.username},welcome to website`)
     // console.log(this)

    }



}

user.welcomeMessage()

user.username="sam"

//user.welcomeMessage()    //output gets updated because of this keyword

//console.log(this)

// arrow function 

// const addtwo = (num1,num2) =>
// {
//     return num1+num2 ;
// }

// console.log(addtwo(5,8))

//or

const addtwo = (num1,num2) =>  (num1+num2)  // here return keyword is not written


console.log(addtwo(5,8))