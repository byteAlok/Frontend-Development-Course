
// console.log("Hello World")

// function add(a) {
//     let sum = 0
//     for (let i of a) {
//         sum = sum + i
//     }
//     return sum
// }

// let arr = [5, 5, 6, 7, 8, 8]

// // --------------- this is spread ----------------
// var x = add([...arr])

// console.log(x)
// console.log(...arr)




// let arr1 = [1, 2, 3]
// let arr2 = [4, 5]

// let all = [...arr1, ...arr2]
// console.log(all) // [1,2,3,4,5]

// ---------------- recursion ------------------------

function printNumbers(start, end)
{
    if (start == end)
    {
        return
    }

    console.log(start)
    printNumbers(start + 1, end)
}

printNumbers(1, 9)

function print1toN(n) {
    if (n === 0) return
    print1toN(n - 1)
    console.log(n)
}

print1toN(5)


function printNto1(n) {
    if (n === 0) return
    console.log(n)
    printNto1(n - 1)
}

printNto1(5)


function sumN(n) {
    if (n === 0) return 0
    return n + sumN(n - 1)
}

console.log(sumN(5))


function factorial(n) {
    if (n === 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(5))


function fibonacci(n) {
    if (n === 0) return 0
    if (n === 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(6))


function arraySum(arr, i = 0) {
    if (i === arr.length) return 0
    return arr[i] + arraySum(arr, i + 1)
}

console.log(arraySum([1, 2, 3, 4]))


function reverseString(str) {
    if (str.length === 0) return ""
    return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("hello"))


function countDigits(n) {
    if (n === 0) return 0
    return 1 + countDigits(Math.floor(n / 10))
}

console.log(countDigits(12345))


function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) return true
    if (str[start] !== str[end]) return false
    return isPalindrome(str, start + 1, end - 1)
}

console.log(isPalindrome("madam"))


function power(a, b) {
    if (b === 0) return 1
    return a * power(a, b - 1)
}

console.log(power(2, 5))


console.log(Math.floor(12/5))