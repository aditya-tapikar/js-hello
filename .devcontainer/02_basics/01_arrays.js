
const myArr = [0,1,2,3,5]

const myHeroes=["batman","chulbul_pandey"]

const myArr2=new Array(1,5,58,62)

//console.log(myArr[2])

                           // array methods

//myArr.push(7)    // it adds value in array at last position

//myArr.pop()    // it removes the last value

//myArr.unshift(8)    //adds value at firsrt position



//console.log(myArr)

//console.log(myArr.includes(9))  // it investigates the question

//slice and splice

//console.log("A",myArr)

const myn1= myArr.slice(1,3)

//console.log(myn1)

//console.log("B",myArr)


const myn2=myArr.splice(1,3)

//console.log(myn2)


//console.log("B",myArr)

const marvelHeroes=["ironman","thor","hulk"]

const dcHeroes=["batman","superman","flash"]

const allHeroes=marvelHeroes.concat(dcHeroes)

//console.log(allHeroes);

//marvelHeroes.push(dcHeroes)


//console.log(marvelHeroes);


const allNewHeroes=[...marvelHeroes,...dcHeroes]


//console.log(allNewHeroes)


const anotherArray=[1,2,[2,5],[52,[5,3]]]

const anotherUsableArray=anotherArray.flat(Infinity)

//console.log(anotherUsableArray)

//console.log(Array.isArray("aditya"))

//console.log(Array.from("aditya"))


let score1=5
let score2=100
let score3=600

console.log(Array.of(score1,score2,score3))

