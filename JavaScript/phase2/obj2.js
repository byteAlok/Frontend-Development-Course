/*
var name1 = "Java"
var framework = "Spring"

var obj = {
    name1 : "Python",
    framework : "FastApi",
    say() { console.log("hello", this.name1, this.framework) },
    arr: () => {console.log("hello", this.name1, this.framework)},
   
}

obj.say()
obj.arr()
*/

// var user = {name : "Ravi", age : 20, class : "12th", e: {email : "ravi@gmail.com"}}
// var user = {name : "Ravi", age : 20, class : "12th", email : "ravi@gmail.com"}

// console.log( Object.keys(user) )  // ----------- for keys
// console.log( Object.keys(user.e) )

// console.log( Object.values(user) )  //-------- for values

// var x = Object.entries(user)
// console.log( x )
// console.log( Object.entries(user) ) // -------- for key, values in pair

// ------------------------------loop---------------------------------------

// var user = {name : "Ravi", age : 20, class : "12th", email : "ravi@gmail.com"}

        // --------------- for loop --------------
// for (var i in user)
// {
//     console.log(i,":",user[i])
// }

        // --------------- forEach() -----------

// var keyArray = Object.keys(user)
// keyArray.forEach(n => console.log(n))

// var valArray = Object.values(user)
// valArray.forEach(x => console.log(x))

// var enArray = Object.entries(user)
// console.log(enArray)

// for (var [k, v] of Object.entries(user))
// for (var [k, v] of enArray)
// {
//     console.log(k, v)
// }


//  --------------1. Array destructing -----------

var Name = "Aman"
var age = 22
var email = "aman@gmail.com"

// console.log(Name)
// console.log(age)
// console.log(email)

// var [ age, Name, email] = ["Alok", 23, "alok@gmail.com", 45]
var arr = ["Alok", 23, "alok@gmail.com", 45]
var [ age, Name, email] = arr

// console.log("Name :",Name)
// console.log("age :",age)
// console.log("email :",email)

//  --------------1. object destructing -----------

var user = {name : "Ravi", age : 20, classs : "12th", email : "ravi@gmail.com"}

// var Name = user.name
// var Age = user.age
// var Class = user.class
// var Email = user.email

// console.log(Name)
// console.log(Age)
// console.log(Class)
// console.log(Email)

// var { name, age, classs, email } = {name : "Ravi", age : 20, classs : "12th", email : "ravi@gmail.com"}
// var [ name, age, classs, email ] = ["Ravi", 20,  "12th","ravi@gmail.com"] // wrong case
var [ name, age, classs, email ] = Object.values(user)
// var { name, age, classs, email } = user

// console.log(name)
// console.log(age)
// console.log(classs)
// console.log(email)

//  ---------------------------alising ----------------------------

var { name:username, age:umar, classs, email } = {name : "Ravi", age : 20, classs : "12th", email : "ravi@gmail.com"}
// console.log(name)
// console.log(username)

// console.log(age)
// console.log(umar)

// -------------- default values ------------------------------
// var { name, age, city = "None" } = {name : "Ravi", age : 20 }
var { name, age, city = "None" } = {name : "Ravi", age : 20 , city : "Mau"}
console.log(name)
console.log(age)
console.log(city)