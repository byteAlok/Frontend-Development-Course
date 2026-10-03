// ---------------- for of loop in js -> Array ------------------

// var arr = [3, 4, 5, "Hello" , "loop", 45, 77, 99 , 233]

// console.log(arr[3])

// console.log(arr.length)

// for (let i = 0; i < 8; i++ )
// {
//     console.log(arr[i])
// }

// for (let i = 0; i <= arr.length -1; i++ )
// {
//     console.log(arr[i])
// }

// for (let i = 0; i < arr.length; i++ )
// {
//     console.log(arr[i])
// }

// for (let v of arr)
// {
//     console.log(v)
// }


//  ------------------- Objects in js -> for in loop --------------------

let obj = { name : "alok", age : 23, course : "MERN", "lang" : "python"}

// console.log(obj["age"])
// console.log(obj.age)

// console.log(obj["course"])
// console.log(obj.course)

// console.log("{")
// for (let o in obj)
//     {
//         console.log(o,":", obj[o])
//     }
// console.log("}")


// for (var i in obj)
// {
//     console.log(typeof(i))
// }

// for (var i in obj)
// {
//     console.log(typeof(obj[i]))
// }

// for (var i in obj)
// {
//     console.log(typeof(i),":" ,typeof(obj[i]))
// }

// --------- for of loop iterate only indexes, but object have keys not indexes -------------
// for (var p of obj)
// {
//     console.log(p)
// }


// ------------------------------------------------------------------------------

var ar = [45, 56,76,75,24,2,4]
//  for (var q of ar)
//  {
//     console.log(q)
//  }

//  for (var q in ar)
//  {
//     console.log(q,":" ,ar[q])
//  }

//  for (var q in ar)
//  {
//     console.log(typeof(q),":" ,typeof(ar[q]))
//  }

var str = "Hello World  uu"

console.log(str[6])
// console.log(str.length)

// for(let a = 0; a < str.length; a++)
// {
//     console.log(str[a])
// }

// for (var a of str)
// {
//     console.log(a)
// }

// for (var a in str)
// {
//     console.log(str[a])
// }