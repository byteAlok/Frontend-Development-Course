// var dt = new Date()

// ----------- setFullYear() ------------------
// dt.setFullYear(2000, 2, 11)
// console.log(dt.toDateString())
// console.log(dt.getDay(), dt.getDate(), dt.getMonth(), dt.getYear(), dt.getFullYear())

// -------------- setTime() ------------------

// dt.setTime(2000000*1000*1000)
// console.log(dt.toISOString())

// ------------- Intl.DateTimeFormat() ------------------

// var f = new Intl.DateTimeFormat("en-US", {
//     timeStyle : "short",
//     dateStyle : "short"
// })
// console.log(f.format(dt))

// console.log( dt.toLocaleDateString("en-US", {
//     dateStyle : "short"
// }))
// console.log( dt.toLocaleTimeString("en-US", {
//     timeStyle : "short"
// }))

// console.log(dt.toLocaleString("ur-iN" , { dateStyle : "full", timeStyle : "medium" }))
// console.log(dt.toLocaleString("hi-iN" , { dateStyle : "full", timeStyle : "medium" }))

var dt = new Date("2003-1-6")
var dt2 = new Date("2026-3-14")

// console.log(dt.toString())
var diff = dt2 - dt
// console.log(diff)
// console.log(    (    (diff / (1000*60*60*24)) + 5  )  / 365 )
