// var str = "Welcome to the JavaScript String Topics"

// --------------------- replace(searchValue, newValue) ----------------------

// var x = str.replace("String", "Object")
// console.log(x)
// console.log(str)
// console.log(str.replace("String", "OOPS"))
// console.log(str.replace(" ", "2334"))
// console.log(str.replace("", "234"))

// --------------------- replaceAll(searchValue, newValue) ---------------------

// console.log(str.replaceAll(" ", "😁"))
// console.log(str.replaceAll("t", "x"))

// ------------------ split(seperator, limit)----------------------

// var str = "Welcome to the JavaScript String Topics"

// console.log(str[5])

// console.log(str.split(""))
// console.log(str.split(" "))

// var p = str.split()
// console.log(p) 
// console.log(p[0][2]) 

// var q = str.split(" ")
// console.log(q) 
// console.log(q[2]) 

// console.log(typeof(p)) 
// console.log(typeof(str)) 

// console.log(str.split(" ", 4)) // using limit --------
// console.log("Welcome".split("", 4)) // using limit --------

// -------------- trim(), trimStart(), trimEnd() --------------------

// var str = "                       Welcome to the JavaScript String Topics   "  

// console.log(str+"HEllo")
// console.log(str.trim()+"HEllo")
// console.log(str.trimStart()+"HEllo")
// console.log(str.trimEnd()+"HEllo")

//------------------- toUpperCase() ------------------------- 

// var str = "heLLO"
// console.log( str.toUpperCase() )
// console.log( str.toLocaleUpperCase() )


//------------------- toLowerCase() ------------------------- 

// var str = "heLLO"
// console.log( str.toLowerCase() )
// console.log( str.toLocaleLowerCase() )

// ------------- repeat() ----------------------------

// var a = "Python "
// console.log(a.repeat(6))

// console.log("b ".repeat(6))
// console.log("b ".repeat(6).toUpperCase().split(" "))

//  ------------------- padStart(targetLength, padString) ----------

// console.log( "Hello".padStart(8, "0") )
// console.log( parseInt("3".padStart(8, "0")) )
// console.log( "708498".padStart(10, "x")) 

//  ------------------- padEnd(targetLength, padString) ----------

// console.log( "708498".padEnd(10, "*")) 

//  ----------------------- concat() --------------------

// var str = "Hello"
// console.log(str)

// console.log(str.concat(4, 4, 5,6,7)) // 1. for string

// console.log(["Hi"].concat(4, 4, 5,6,7)) // for Arrays

// console.log("".concat(4, 4, 5,6,7)) //2. for string

//  -------------- iteration ------------

var str = "Welcome to the JavaScript String Topics"

// for (let i = 0; i < str.length; i++)
// {
//     console.log(str[i])
// }
// for (let j of str)
// {
//     console.log(j)
// }

// var z = str.split(" ")
// console.log(z)

// for (let k of z)
// {
//     console.log(k)
// }

// ------------- charCodeAt(indexNumber) ----------------
console.log("547a".charCodeAt(2))
console.log("🤣".charCodeAt())

// ------------- codePointAt(indexNumber) ----------------

console.log("547a".codePointAt(2))
console.log("🤣".codePointAt())

// --------------- fromCharCode(code1, code2, code3, ................) -----------------

console.log( String.fromCharCode(97,98, 99) )

// --------------- fromCodePoint(code1, code2, code3, ................) -----------------

console.log( String.fromCodePoint(55358) )
console.log( String.fromCodePoint(129315) )

// --------------------- constructor method  ----------------------

var a = new String("Java")
var n = a.split()
console.log(n[0])

