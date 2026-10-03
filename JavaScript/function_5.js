// function say( y )
// {
//     y()
//     console.log("Second")
// }

// function call( x )
// {
//     console.log("Mai kaam karne ja raha hu")
//     x()
// }

// call( say )


function multiply(a)
{
    return  function (b) {
        return b * a
    }
}

// var x = function (b) {
//     return 5 * b
// }
// var x = multiply(5)
 
// console.log(x(3))


//  ==================== Rest Parameter ======================

// function add(a, b, c)
// {
//     var sum = a + b + c
//     return sum
// }

// var x = add(5,6,7)
// console.log(x)

// var n = [5, 6, 7]
// console.log(n[1])

function add( ...nums )
{
    // console.log(nums)
    var sum = 0
    for (let i of nums)
    {
        sum = sum + i
    }
    // console.log(sum)
    return sum
}

var b = add(5, 6, 7, 4,6,7,3,35,5,5)
console.log(b)
