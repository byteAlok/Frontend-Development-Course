let arr = [34, 3, [324, 75, 58, 38, ["Hello", [44, 45, 46, 47] , "Alok"]], 32, 7, 224,]

// console.log(typeof(arr[2]))

// for (let i = 0; i < arr.length; i++)
// {
//     if (Array.isArray(arr[i]))
//     {
//         for (let j = 0; j < arr[i].length; j++)
//         {
//             console.log(arr[i][j])
//         }
//     }
//     else {
//         console.log(arr[i])
//     }
// }

function printArray(a) {
    for (let i = 0; i < a.length; i++) {
        if (Array.isArray(a[i])) {
            printArray(a[i])
        }
        else {
            console.log(a[i])
        }
    }
}

// printArray(arr)

// let b = arr.forEach( v => {
//     console.log(v)
// })

function printArray2(a)
{
    a.forEach(e => {
        if (Array.isArray(e))
        {
            printArray2(e)
        }
        else {
            console.log(e)
        }
    });
}

printArray2(arr)