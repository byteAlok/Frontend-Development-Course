var arr = [3, 5, 7, 8, 9]

// ======================== reduce() =================
// var x = arr.reduce((sum, next) => {
//     console.log(sum,next)
//     return sum + next
// })
// console.log(x)

// ---------------------- some() ------------------------

// console.log(arr.some( v => v % 2 == 0 ))
// var p = arr.some( v => v == 3 )
// console.log(p)

// -------------------- every() ----------------------

// console.log( arr.every(v => v != 5) )

// --------------- reverse() -------------------------
// console.log(arr)
// var s = arr.reverse()
// console.log(arr.reverse())

// ---------------------- sort() -------------------

// var str = ["Hello", "Python", "30", 30, "Apple", "APple"]
// var z = str.sort()
// console.log(z)

// var arr2 = [10, 3, 50, 72, 18, 19]
// var v = arr2.sort( (a, b) => {
//     console.log("a :",a, "b :",b)
//     return a - b
// })
// console.log(v)

var obj = [ {age : 23}, {age: 20}, {age : 25},{age:20} ]

console.log(obj[2]["age"])
console.log(obj[2].age)

var c = obj.sort( (a, b) => a.age - b.age)
console.log(c)