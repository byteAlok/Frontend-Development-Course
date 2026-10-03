var arr = [10, 12, 13, 14, 15]
console.log(arr.indexOf(13))
console.log(arr.includes(120))

var res = arr.find( v => v > 23)
console.log(res)
var res2 = arr.findIndex( v => v > 13)
console.log(res2)

var n = arr.map(x => x * x)
console.log(n)
n.push(33)
console.log(n)

var r = arr.filter( c => c % 2 === 0)
console.log(r)

var p = arr.reduce((a, b) => a + b, 0)
console.log(p)

