// var a = 10
// var b = 15

// console.log(a + b)

// function add(i, j)
// {
//     console.log(i + j)
// }

// var a = add(7, 8)
// console.log(a)
// console.log("----------------------------")

// function sub(x, y)
// {
//     return (x - y)
// }

// var b = sub(20 , 7)
// console.log(b)

// function add(i, j)
// {
//     console.log(i + j)
// }

// add(7, 8)
// var p = add(2, 4)
// console.log(p)

// function add(i, j)
// {
//     return (i + j)
// }

// var c = add(10, 20)
// console.log(" c :",c)

// console.log( "console :",add(2, 4) )


// console.log("----------------------------")

// function sub(x, y)
// {
//     return (x - y)
// }

// var b = sub(20 , 7)
// console.log(b)

// function fun(n)
// {
//     // console.log("Hello, How are you!")

//     console.log(`Hello ${n}, How are you!`)
// }

// fun("Alok")
// fun(3535)

// function fun(n)
// {
//     return (`Hello ${n}, How are you!`)
// }
// var d = fun("Html")
// console.log(d)
// console.log(fun("console"))

// var num = 5
// for (var i = 0; i <= num; i++) {
//     console.log(i)
// }

// function count(x) {
//     for (var i = 0; i <= x; i++) {
//         console.log(i)
//     }
// }

// count(3)
// count(40)
// count(40000)
// function checkEven(num)
// {
//     if (num % 2 == 0)
//     {
//         console.log("Even Number")
//     }
//     else{
//         console.log("Odd Number")
//     }
// }

// checkEven(56)
// checkEven(133)

// var num = 4
// function checkPrime(num)
// {
    // for (var i = 2; i < num; i++)
    // {
    //     if (num % i == 0)
    //     {
    //         console.log("Not Prime")
    //         break
    //     }
    // }
// }

// var isPrime = true;

// for (var i = 2; i < num; i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }

// if (isPrime && num > 1) {
//     console.log("Prime");
// } else {
//     console.log("Not Prime");
// }

// var namee = "Alok"
// console.log("Hello "+ namee +" How are",namee ,"You")
// console.log("Hello", namee ,"How are You")
// console.log(`Hello ${namee} How are ${num} You`)

// function demo()
// {
//     console.log("hello")
// }
// demo()
// var a = demo()
// console.log(a)


// function checkPrime(num)
// {
//     var prime = true

//     for (var i = 2; i < num; i++)
//     {
//         if (num % i == 0)
//         {
//             prime = false
//             break
//         }
//     }

//     if (prime == true && num > 1)
//     {
//         return `${num} is a Prime Number`
//     }
//     return `${num} is a Non-Prime Number`
// }

// console.log( checkPrime(-1) )

function checkPrime(num)
{
    for (var i = 2; i < num; i++)
    {
        if (num % i == 0)
        {
            console.log("Not-Prime")
            break
        }
    }
}

console.log( checkPrime(8) )