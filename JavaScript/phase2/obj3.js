// var obj = { "name" : "Alok", age : 23 }
// obj.name = "Hello"
// obj.email = "alok@gmail.com"
// // console.log(obj)
// // console.log(obj.email)

// ---------------- Object.defineProperty() --------- value asign example ->  -----------

var user2 = {"name" : "Alok", age : 23 }

Object.defineProperty(user2, "course", {
    value : "Python",
    writable : true
})
user2.course = "C#"
// console.log(user2.course)

// --------- Object.defineProperty() --------- Looping example ->  ----- enumerable : true/false------

var user3 = {"name" : "Alok", age : 23,  }

Object.defineProperty(user3, "course", {
    value : "Python",
    writable : false,
    enumerable : true,
    configurable: false
})

// console.log(Object.keys(user3))
// console.log(user3)
// for (var i in user3)
// {
//     console.log(i, user3[i])
// }
// ---------------- Object.defineProperty() --------- delete example -> configurable : true/false -----------
var user = {"name" : "Alok", age : 23 }

Object.defineProperty(user, "course", {
    enumerable : true,
    configurable : true 
})

// delete user.age
delete user.name
delete user.course
// console.log(Object.keys(user))
// console.log(Object.values(user))

// --------- Object.defineProperty() --------- redefine example -> configurable : true/false------

let user4 = {"name" : "Alok", age : 23,  }

Object.defineProperty(user4, "course", {
    value : "Python",
    writable : false,
    enumerable : true,
    configurable: true
})
Object.defineProperty(user4, "course", {
    value : "Rust",
    writable : false,
    enumerable : true,
    configurable: false /* -- agar ye false hai to next time es key -> course par future me 
                                koi changes nhi kar sakte eske settings/descriptors--*/
})
// Object.defineProperty(user4, "course", {
    
//     writable : true,
//     enumerable : true,
//     configurable: false
// })

console.log(Object.keys(user3))
// console.log(user3)
// for (var i in user3)
// {
//     console.log(i, user3[i])
// }

// -------------Define multiple properties at a time ----------- Object.defineProperties ---------

var user5 = {name : "Ravi", age : 25}

// console.log(user5)

// Object.defineProperties(user5, { course : { value : "Pt", enumerable : true} ,  email : {value : "ravi@gmail.com", enumerable : true} })
Object.defineProperties(user5, { 
    course : { value : "Pt", enumerable : true} ,
    email : {value : "ravi@gmail.com", enumerable : true} ,
})
// console.log(user5)