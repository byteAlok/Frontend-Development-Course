// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.SQRT1_2)
// console.log(Math.SQRT2)
// console.log(Math.LN10)
// console.log(Math.LN2)
// console.log(Math.LOG2E)
// console.log(Math.LOG10E)

// console.log(Math.abs(-34))
// console.log(Math.abs(4))
// console.log(Math.abs(4.86))
// console.log(Math.abs(-4.86))

// console.log(Math.ceil(-4.86))
// console.log(Math.ceil(4.86))

// console.log(Math.floor(4.86))
// console.log(Math.floor(4.01))
// console.log(Math.floor(3.999))

// console.log(Math.round(3.999))
// console.log(Math.round(6.6))
// console.log(Math.round(6.5))
// console.log(Math.round(6.49))

// console.log(Math.trunc(5.9))
// console.log(Math.trunc(-5.9))

// console.log(Math.sqrt(5.9))
// console.log(Math.sqrt(441))

// console.log(Math.pow(4, 3))

// console.log(Math.floor(Math.random()*100))

// console.log(Math.min(4, 3, 66, 9, 1))
// console.log(Math.min())

// console.log(Math.max(3,4,5,6,7,23))
// console.log(Math.max())

// console.log(Math.sign(-53))
// console.log(Math.sign(53))
// console.log(Math.sign(0))

// console.log(Math.cbrt(49))
// console.log(Math.cbrt(64))

// console.log(Math.hypot(4, 3))

// console.log(Math.log(Math.E))
// console.log(Math.log(100))

// console.log(Math.log10(Math.E))
// console.log(Math.log10(100))

// console.log(Math.log2(Math.E))
// console.log(Math.log2(100))

// console.log(Math.sin((Math.PI/2)))

// var a = 24
// console.log((34).toString())
// console.log(a.toString())

// var arr = new Uint8Array(1)
// var arr = new Uint8Array(3)
// crypto.getRandomValues(arr)
// console.log(arr[0])
// console.log(arr)

// console.log(0.2 + 0.4 == 0.60 )
// console.log((0.2 + 0.4).toFixed(3) == 0.60 )
// console.log((0.2 + 0.4).toFixed(3))

// console.log(Number.MAX_VALUE)
// console.log(Number.MIN_VALUE)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.MAX_SAFE_INTEGER)

// var n = 9999923252344234
// console.log(Number.isSafeInteger(n))
// console.log(n)

// "use strict";
// x = 10
// console.log(x)

// var dt = new Date("2000-05-02")
// var dt = new Date(2025, 4, 10, 10, 30, 20, 500)
// console.log(dt.toString())
// console.log(dt.toLocaleString())
// console.log(dt.toLocaleDateString())
// console.log(dt.toLocaleTimeString())
// console.log(dt.toDateString())
// console.log(dt.toTimeString())
// console.log(dt.toUTCString())
// console.log(dt.toISOString())
// console.log(dt.toJSON())
// console.log(dt.getTimezoneOffset())

// var dt = new Date("2025-05-10")
// dt.setFullYear(2032, 9, 22)
// console.log(dt.getFullYear(), dt.getMonth(), dt.getDate())

var dt = new Date()
// dt.setMonth(11, 12)
// console.log(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getDay().toString())
// console.log(dt.toDateString())
// console.log(dt.toTimeString())
// console.log(dt.toLocaleTimeString())
// console.log(dt.toString())
// console.log(dt)

// var f = new Intl.DateTimeFormat("en-US" , {
//     dateStyle : "full",
//     timeStyle : "medium",
// })
// console.log(f.format(dt))

// console.log(dt.toLocaleString("hI-iN" , {
//     dateStyle : "full",
//     timeStyle : "medium",
// }))

var dt = new Date("2025-01-01")
var dt2 = new Date("2025-03-10")

var diff = dt2 - dt
// console.log(diff/(1000*60*60*24))


var obj = { name : "Alok", age : 23, 
    course : {
        frontend : { 1 : "HTML",
        2 : "CSS",
        3 : "JavaScript"
        },
        Backend : {
            1 : "NodeJs",
            2 : "ExpressJS",
            3 : "MongoDb"
        }
    }
}

console.log(typeof obj)

function printObj(a)
{
    for (var i in a)
    {
        if (typeof a[i] == "object")
        {
            printObj(a[i])
        }
        else
        {
            console.log(i,":", a[i])
        }
    }
}
printObj(obj)

function printObj2(a, parent="")
{
    for (var i in a)
    {
        if (typeof a[i] === "object")
        {
            printObj2(a[i], parent + i + ".")
        }
        else
        {
            console.log(parent + i , ":", a[i])
        }
    }
}

printObj2(obj)