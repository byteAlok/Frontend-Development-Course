var str = "Hello World of 'python' programming"
var str = 'Hello `World` of "python" programming'
var str = `Hello World 'of' "python" 

slkdgnln

programming`
// var str = `Hello World 'of' "python" programming`
// var str = 'Hello'

// console.log(str)
// console.log(str[1])

// var num = "" || "Guest"
// var str = `Hello World 'of' ${num} a = 3, b = 5 => ${3+5} "python" programming`

// console.log(str)

// --------------- immutability --------------------

// var str = "  Hello Python"
// str = str[3] = 'w'
// console.log(str, str[3] = 'w')

// ---------------- length ----------------------------
// console.log(str.length)
// console.log("🤣".length)

//  ------------- charAt()----------------------

// console.log( str.charAt(6))           // -----> old method---
// console.log( str[6])

// ------------------ indexOf(searchValue, fromIndex)------------

// console.log( str.indexOf("n") )
// console.log( str.indexOf("t", 9) )
// console.log( str.indexOf("l",3) )

// ---------------- includes(searchValue, fromIndex) ---------------

// console.log(str.includes(" "))
// console.log(str.includes("  "))
// console.log(str.includes("th"))
// console.log(str.includes(" ", 6))

// -------------- slice(start?, end?) ------------- ? means optional ----

// var x = str.slice()
// var x = str.slice(5)
// var x = str.slice(3, 9)

// var x = str.slice(-4)
// var x = str.slice(-6, -2)
// var x = str.slice(-6, 13)
// console.log(x)

// --------------- substring(start, end) ------------ 

var str = "  Hello Python"
// console.log(str.substring(2, 9))
// console.log(str.substring(9, 2))

// console.log(str.substring(-6, -1)) // ----------- not working  
// console.log(str.substring(-6, 11)) // ----------- working  

// -------------------- substr(start, length) ----------- old ---------

console.log(str.substr())
// console.log(str.substr(3))
// console.log(str.substr(4, 6))
