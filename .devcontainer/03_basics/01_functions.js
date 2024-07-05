

//declaration 

function sayMyName(){

    console.log("aditya");
    console.log("tapikar");
    }
    
    //sayMyName()
    
    function addTwoNum(num1,num2){
    
        console.log(num1+num2);
    }
    
    //addTwoNum(5,52)
    
    function loginUserMessage(username) {
        return `${username} just logged in`
        
    }
    
    //console.log(loginUserMessage("aditya"));
    
    
    // jab apne ko pata nai ho ki kitni entries aane wali ho
    function calculateCartPrice(...num1)
    {
      return num1;
    
    }
    
    console.log(calculateCartPrice(500,600,200))   //ye... ko bolte hai rest operatorye sari entries ko array ke form me store karta hai   
    
    
    //function ke through object access karna
    
    const user={
       username:"ADITYA",
       PRICE:"333"
    }
    
    function handleAnyObject(object)
    {
             console.log(`username is ${object.username} and price is ${object.PRICE}`)
    }
    
    handleAnyObject(user)
    
    //function ke through array access karna
    
    const newArray=[200,500,600]
    
    function returnSecondValue(anyArray)
    {
        return anyArray[1]
    
    }
    
    console.log(returnSecondValue(newArray))