// var y = 5

// let x = y + 10
// console.log(x)

// try {
//     let x = y + 10
//     console.log(x)
// } 
// catch (err)
// {
//     console.log("Error Message: "+err.message)
// }
// finally {

//     console.log("Finally step")
// }

// console.log("Next step")


var a = 25
var b = 0

try {
    if (b == 0) {
        throw new Error("Cannot divide by 0")
    }
    else {
        console.log(a / b)
    }
}
catch (e) {
    console.log(e)
}

finally {

    console.log("Finally Block")
}
