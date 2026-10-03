// --------------- IIFE --------------------------

// var a = (10) 
// console.log("Hello", a) 

// ;(function () {
//     console.log("IIFE")
// }) ();

// ;(function () {
//     console.log("IIFE")
// } () ) ;

// =---------------- spread ------------------------

// function add(a, b)
// {
//     return a+b
// }

// var x = add(4,5)
// console.log(x)

// function addArray(a = [2, 5, 6, 8, 9]) // pass argument only array, ( default parameter -> a = [2, 5, 6, 8, 9] )
function addArray(...a)
{
    var sum = 0
    for (var i of a)
    {
        sum = sum + i
    }
    return sum
}

// -------- passed argument using array ----------------

// var arr = [100, 200, 500]
// var x = addArray( arr ) 
// console.log(x)

//  ------------ passed argument using spread --------------

var b = [20, 50 ]
var c = [5,6,7]
var d = [15]

// console.log(...d)

// var arr = [...b, ...c, ...b]

// console.log( ...b )
// console.log( [...b] )

// console.log( arr )

// var x = addArray([...b, ...c])
// console.log(x)

// console.log( [...b, ...c] )

// var x = addArray(...b,...c,...c)
// console.log(x)
