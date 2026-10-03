// var arr = [10, 20, 50, 60, 70, 80]

// ------------- slice() or slice(startIndex, endIndex) ----------------
// console.log("arr :",arr)
// var copy = arr.slice()
// console.log( "copy :",copy )

// var copy2 = arr.slice( 1, 4)
// console.log( "copy2 :",copy2 )
// copy2[3] = 25
// console.log( "copy2 :",copy2 )

// --------------- splice() ---------------------------

// var arr = [10, 20, 50, 60, 70, 80]
// console.log("old arr :",arr)

// var x = arr.splice(2)
// console.log(x)

// var del = arr.splice(2, 3)
// console.log(del)

// var ins = arr.splice(2, 0, 225, 667, 888)
// console.log(ins)

// var rpc = arr.splice(2, 3, 225, 667, 888)
// console.log(rpc)

// console.log("updated arr :",arr)

// --------------- Reference copy --------------------

// var arr = [10, 20, 50, 60, 70, 80]
// console.log(arr)

// var b = arr
// console.log(b)
// b.push("Hello")

// console.log(b)
// console.log(arr)

// ------------------ shallow copy ----------------------

// var arr = [10, 20, 50]
// console.log(arr)

            // 1 -------------- slice()
// var b = arr.slice()
// console.log(b)
// b.push("hi")

// console.log(b)
// console.log(arr)
            // 2 -------------- spread 

// var b = [...arr]
// console.log(b)
// b.push("hi")

// console.log(b)
// console.log(arr)

            // 3 ------------- concat()
// var c = ["hl", "j"]
// console.log( ["html", "java"].concat(arr) )
// c = c.concat(arr)
// console.log( c )

// c.unshift(999)
// console.log(typeof(c[0]))
// console.log(arr)

// --------------------- JSON.parse() --------- JSON.stringify()----------

// var arr = [10, 20, 50, "Hello", null, 45, undefined, 78, function say() {console.log("python")}]
// console.log(arr)
// console.log(typeof(arr))

// var str = JSON.stringify(arr)
// console.log(str)
// console.log(typeof(str))

// var jarr = JSON.parse(str)
// console.log(jarr)
// jarr.push(123456)
// console.log(arr)
// console.log(jarr)


// ---------------------------- Array.isArray()--------

var arr = [2, 4, 5, [23, 45, [3,33,[ "hi","bye"], 333], 67] , 6, ,7 ]
// console.log(arr)
// console.log( Array.isArray(arr[3]) )
// console.log( typeof(arr) )
// for (let i of arr)
// {
//     console.log(i)
// }

function printArray(a) {

    var store = []
    // store[200] = 34
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            printArray(a[i])
        }
        else {
            console.log(a[i])
        }
    }
}

// printArray(arr)

// -------------- flat()------------------------

// console.log( arr.flat(Infinity) )

// --------------- sparse array ---------------
var store = [] 
store[200] = 34
store[140] = 25
console.log(store)

// ------------ dense array --------------
var store = [] 
store.push(34, 56)
console.log(store)

