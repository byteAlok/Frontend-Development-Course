// setTimeout( function(){
//     console.log("Delay Function")
// }, 0 )

// console.log("Hello")
// console.log("World")

// function square (x)
// {
//     return x*x
// }

// function square (x) { return x*x }

// let square = (x) =>
// {
//     return x*x
// }

// var square = (a) =>  a * a 
// var square = a =>  a * a 
// var square = (a) => { return a * a }

// var square = (a) => { a * a } // -- error ----

// console.log( square(9) )

// var fun = () => {
//     console.log("Arrow Function")
// }

// var fun2 = () => console.log("Hello")

// fun2()

//  ----------------- Default Parameters -------------------------

// function add(x = 0, y = 0, z = 0)
// {
//     return x + y + z
// }

// var a = add(5, 6, 5)
// console.log(a)

// function greet(name = "User")
// {
//     console.log("Hello",name)
// }

// greet()
// greet("Alok")

//  ---------------- arguments object in js ------------------

// var obj = { "0": 5, "1": 10, "2": 20 }
// // console.log(obj["1"])

// var sum = 0
// for (var i in obj) {
//     sum = sum + obj[i]
// }
// console.log(sum)


function add() 
{
    console.log(arguments)

    var sum = 0

    for (var x in arguments) 
    {
        sum = sum + arguments[x]
    }
    console.log(sum)
}

add(2, 4, 5, 6)
