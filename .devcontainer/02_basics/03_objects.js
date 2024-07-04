//singleton

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="dhoni"
tinderUser.isLoggedIn=false


//console.log(tinderUser)

// object in object
const regularUser={

    email: "some@gmail.com",
    fullname : {
  userfullname : {
        firstname: "ADITYA",
        lastname: "TAPIKAR"
  }
    }
}

//console.log(regularUser.fullname);


// objects merge
const obj1={1:"a" , 2:"b" }

const obj2={3:"c", 4:"d"}

const obj3={obj1,obj2}

console.log(obj3);

const obj4={...obj1,...obj2}  // isse do object merge ho jaynege

console.log(obj4)

// destructuring objects

const course={

  coursename:"js in hindi",
  Price:"999",
  courseInstructor: "hitesh"

}

const{courseInstructor:instructor}=course

console.log(instructor)