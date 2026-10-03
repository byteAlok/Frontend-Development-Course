const _ = require("lodash")
/*var arr = [23, 21, 34, 54, {name : "alok"}, function say() {return "Hello"}]
console.log(arr) 

// var x = arr.splice(arr.length - 1, 0, 88, 65)

// console.log(x)
// console.log(arr) 

var y = arr.slice(0,arr.length)
console.log(y)
y[4].name = "aaman"
console.log(y)

var p = arr.slice()
console.log("p :",p)
p.push(15)
console.log("p :",p)

var x = [].concat(arr)
console.log(x)
console.log(arr)
x.push(224)
console.log(x)
console.log(arr)
*/

// let ar = [{a:1}];
// let copy = [3, 4, 5].concat(ar);

// copy[0].a = 99;

// console.log(ar); // 99
// console.log(copy); // 99

var ps = [34, 45, {b : 11}, undefined, 928357, function say() {console.log("Hello")}, new Date()]
// var deep = JSON.parse(JSON.stringify(ps))

// console.log(deep)
// console.log(ps)
// console.log(typeof(5463n))
// console.log(typeof(ps[ps.length-1]), ps[ps.length-1])
// console.log(typeof(deep[deep.length-1]), deep[deep.length-1])
// console.log(deep.length)
// console.log(ps.length)

ps.alok = ps
console.log(ps['alok'][1])
// var c = structuredClone(ps)
// console.log(c)
var d = _.cloneDeep(ps)
console.log(d)