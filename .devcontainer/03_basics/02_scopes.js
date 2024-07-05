 let a=50
if(true){

    let a=20
    const b=40
    var c=50
    console.log("inner",a);
}

//console.log(a);
//console.log(b);
//console.log(c);

//a aur b nahi print hua par c hogya  isiliye var kabhi use nai karte

console.log(a)

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}

//another syntax of writing function also called as expression


const addTwo = function(num){
    return num + 2
}

addTwo(5)