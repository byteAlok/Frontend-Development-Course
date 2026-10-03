// var arr = [5, 6, 8, 9, 3, 3, 77, 88, 99]

// var x = arr.indexOf(3)
// console.log(x)


// function index(a, ar)
// {
//     var count = -1
//     var check = true

//     for (var i of ar) {
//         count++

//         if (i == a) {
//             check = false
//             break
//         }
//     }

//     if (check === true)
//     {
//         return -1
//     }
//     return count
// }

// var p = index(77, arr)
// console.log(p)
// ------------------------------------------------

// var x = arr.includes(9)
// console.log(x)

// function inc(a, ar)
// {
//     var check = false
//     for (var i of ar) {

//         if (i === a) {
//             check = true
//             break
//         }
//     }
//     return check
// }

// var z = inc(78, arr)
// console.log(z)

// ----------------------------------------

// if (arr.indexOf(6) !== -1)
// {
//     console.log(true)
// }

// --------------------------------------

// var arr = [50, 60, 80, 90, 30, 13, 5, 77, 88, 99]

// var a = arr.find(function (t) { return t < 10 })
// var b = arr.find( (s) => { return s < 20} )
// var b2 = arr.find( s => { return s < 20} )
// var c = arr.find( (s) =>  s < 20 )
// var c2 = arr.find( s =>  s < 20 )


// console.log("a : "+a)
// console.log("b : "+b)
// console.log("c : "+c)

// --------------------------------------'

// var arr = [50, 60, 81, 90, 30, 13, 5, 77, 88, 99]

// var a = arr.findIndex(function (t) { return t < 10 })
// var b = arr.findIndex( (s) => { return s < 20} )
// var b2 = arr.findIndex( s => { return s < 20} )
// var c = arr.findIndex( (s) =>  s < 20 )
// var c2 = arr.findIndex( s =>  s < 20 )

// console.log("a : "+a)
// console.log("b : "+b)
// console.log("b2 : "+b2)
// console.log("c : "+c)
// console.log("c2 : "+c2)

// -----------------------------------------

// var arr = [50, 60, 81, 90, 30, 13, 5, 77, 88, 99]

// var ar = arr.map( v => v + 2)
// console.log("ar =",ar)
// console.log("arr =",arr)

// ------------------------------------

// var arr = [50, 60, 81, 90, 30, 13, 5, 77, 88, 99]

// var n = arr.filter( v => v % 2 == 0 )
// console.log(n)
