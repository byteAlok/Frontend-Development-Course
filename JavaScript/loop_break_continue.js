// -----------------break---------------
// for (let i = 1; i< 10; i++)
// {
//     if (i == 5)
//     {
//         break
//     }
//     console.log(i)
// }

// -----------------continue---------------
// for (let i = 1; i< 10; i++)
// {
//     if (i == 2)
//     {
//         continue
//     }
//     console.log(i)
// }

// console.log("loop continue")

//  -------------------infinite loop ---------------------
// let a = 5
// while (true)  
// {
//     console.log(a)
//     a++
// }

// var b = 0
// while (b < 10)
// {
//     console.log(b)
//     b++
// }
// var b = 0
// while (b < 10)
// {
//     // if (b == 6) break
    
//     if (b == 3) 
//         {
//             b++
//             continue
//         }
//         console.log(b)
        
//     b++
// }

// var p = 0
// while (p < 30)
// {
//     if (p % 2 == 0)
//     {
//         console.log(p)
//         p++
//     }
// }

var d = 0
do
{
    if (d == 7) 
    {
        break
    }
    
    if (d == 2)
    {
        d++
        continue
    }
    console.log(d)
    d++
}while(d < 10)