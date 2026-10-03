// console.log("Hello")
// prompt()

// console.log(prompt("Enter a number"))
// console.log(45)
// console.log("45")

// if ("Hello") { console.log("Hii") }
// if (-0) { console.log("Welcome") }

var day = parseInt(prompt("Enter day number"))

switch (day) 
{
    case 1 : console.log("Sunday") 
            break
    case 2 : console.log("Monday") 
            break
    case 3 : console.log("Tuesday") 
            break
    case 4 : console.log("Wednesday") 
            break
    case 5 : {console.log("Thursday")
            console.log("Hello")
            break }
    case 6 : console.log("Friday") 
            break
    case 7 : console.log("Saturday") 
            break
    default : console.log("Enter valid week number")
            // break
}