/*
function printDescending(num) {

    if (num <= 0) {
        return;
    }
    // Recursive call: call the function with a decremented number
    printDescending(num - 1);

    console.log(num); // Print the current number
    
}

printDescending(3);
*/

// var user = {
//     name: "Alok", age: 23,
//     course: {
//         1: "Frontend",
//         Backend: { p: "NodeJs", q: "ExpressJS", r: "MongoDb" }
//     },
//     duration: { a: "dfgd", b: "sdgseg" }
// }

// console.log(typeof(user))
// console.log(typeof user.course)
// console.log(typeof user.age)
// console.log(typeof user.name)

// for(var k in user.course)
// {
//     console.log(k,":", user.course[k])
// }

// for (var i in user) {
//     if (typeof user[i] == "object") {

//         for (var k in user[i]) {
//             console.log(k, ":", user[i][k])
//         }
//     }
//     else {
//         console.log(i, ":", user[i])
//     }
// }

var user = {
    name: "Alok", age: 23,
    course: {
        1: "Frontend",
        Backend: { p: "NodeJs", q: "ExpressJS", r: "MongoDb" }
    },
    duration: { a: "dfgd", b: "sdgseg" }
}

function printObj( u )
{
    for (var i in u)
    {
        if ( typeof u[i] == "object")
        {
            printObj(u[i])
        }
        else
        {
            console.log(i, ":", u[i])
        }
    }
}
printObj(user)
