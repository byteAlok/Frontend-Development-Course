// function say()
// {
//     console.log("Hello")
// }

// say()


// function say2( num)
// {
//     console.log("Java", num)
// }

// say2("Alok")

// function say3(x)
// {
//     // var b = "python " + x
//     var b = `python ${x}`
//     return b
// }

// var a = say3("api")
// console.log(a)



// var a = checkPrime(0)
// console.log(a)

function checkPrime(n)
{
    let prime = true

    for (let i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            prime = false
        }
    }

    if (prime && n > 0)
    {
        return `${n} is a Prime Number`
    }
    else {
        return `${n} is a Non-Prime Number`
    }
}


// let fun = function add(x, y){
//     return x + y
// }

// let fun = function (x, y){
//     return x + y
// }

// var a = fun(4, 5)
// console.log(a)


var prm = function (n)
{
    let prime = true

    for (let i = 2; i < n; i++)
    {
        if (n % i == 0)
        {
            prime = false
        }
    }

    if (prime && n > 0)
    {
        return `${n} is a Prime Number`
    }
    else {
        return `${n} is a Non-Prime Number`
    }
}

// var a = prm(19)
// console.log(a)


// (function ()
// {
//     console.log("Anonymous Function")
// } () );


; (function () {
    console.log("IIFE")
})();

; (function () {
    console.log("IIFE")
}());


// console.log("HI")