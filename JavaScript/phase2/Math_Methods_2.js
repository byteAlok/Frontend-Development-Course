
/*
// var rn = Math.random()
// console.log(rn)

// ---------- 31. crypto.getRandomValues()------------

// var arr = new Uint16Array(8)
// crypto.getRandomValues(arr)

// console.log(arr)

function genPass(len)
{   
    const chars = "abcdeABCD1234567890"
    let result = ""

    var arr = new Uint16Array(len)
    crypto.getRandomValues(arr)
    console.log(arr)

    for (let i = 0; i < len; i++)
    {
        result = result + chars[arr[i] % chars.length]
    }
    return result

}
// console.log( genPass(16) )


// ----------- 32. Floating-Point Precision Issue

// console.log( (0.1 + 0.2) == 0.3 )
// console.log((0.1 + 0.2).toFixed(4) == 0.3)
// console.log(   typeof(  (0.1 + 0.2).toFixed(4)  )   )

// console.log((0.1 + 0.2).toFixed(4) === 0.3)

// console.log( (0.2 + 0.3) == 0.5 )  // ----------- true 

// ------------ 35. Numeric Limits is JS -----------------------

// console.log( Number.MAX_VALUE )
// console.log( Number.MIN_VALUE )
// console.log(Number.MAX_SAFE_INTEGER)

// var n = 9007199254740991
// var n = -9007199254740991 

// console.log(Number.MIN_SAFE_INTEGER)

// -------------- 36. Checking safe integer -----------

var n = 9007199254740991
// console.log( Number.isSafeInteger(n) )

//  ------------ 37. BigInt for Large Number ------------

var num1 = 345n
var num2 = 20n
var sum = num1 + num2
// console.log(typeof(num1))
// console.log(sum)

// --------- 38. Number Object Methods -----------------------

var nm = '324'
// console.log(Number(nm))
// console.log( Number("1234567g") )

// console.log(Number(true)) //-------- 1
// console.log(Number(false)) //-------- 0
// console.log(true)
// console.log(true)

// --------------- 39. Parsing Numbers -----------------------

// --------------------------------parseInt(string, base)

// console.log( "231" )
// console.log( parseInt("12eg34e") )
// console.log( parseInt("1234567v") )

// console.log( parseInt(true) )  //-------- NaN
// console.log( parseInt(false) ) //-------- NaN

// ----------- binary, decimal, hexadecimal, octal, etc
// console.log( parseInt("10011001", 2) )
// console.log( parseInt("f", 16) )
// console.log( parseInt("12", 8) )

// --------------------------------parseFloat(string)

// console.log( parseFloat("1gh23.53fef") )

// ------------------------- "use strict" ------------------------------

// x = 34
// console.log(x + 5)

*/

"use strict";
x = 34
console.log(x)
