// -------------- 40. NaN and Infinity -----------

// console.log(0 / 0) 
// console.log(2 / 0) 
// console.log(-2 / 0) 
// console.log(0 / 4) 
// console.log("abc" * 5) 

// ------------41. Number.isNaN ------------

// console.log( Number.isNaN("hbf8") ) // ---------- 
// console.log( isNaN("343b") )

// console.log( Number.isFinite(Infinity))

// ------ 44. Number Formatting -----------------

// console.log(344.98757)
// console.log((344.98757).toFixed(2))

// console.log((344.98757).toPrecision(4))
// console.log((344.98757).toPrecision(22))\

// ----45. Intl.NumberFormat -------------------

var num = 25000

var ft = new Intl.NumberFormat("en-IN", { 
    style: "currency",
    currency: "INR" // ------- USD, YEN 
})
console.log(ft.format(num))