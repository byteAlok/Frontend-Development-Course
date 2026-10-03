// ------------1. Literal methods for object creation -------------

// var user = { name : "Sonam", age : 20, age : 30, }
// var user = { "name" : "Sonam", "age" : 20, "age" : "20" }

// console.log(user)

// var product = { realmeGT : { name : "GT 6T", price : 27000, } ,
// realme3 : { name : "3Model", battery: 5000, ram : "6gb" }
// }
// console.log(product.realmeGT)

// -----------------2. ----------------------------------------------
// var user = {}
// user.name = "Html", user.age = 33

// user.name = "Html"
// user.age = 33

// console.log(user)

// ------------ Constructor methods for object creation -------------

// var obj = new Object() // initilising properties after creating object using : Object Class 

// obj.name = "JavaScript"
// obj.age = 40
// obj["price"] = 10000

// console.log(obj)

// var obj2 = new Object( {name : "Python", age : 22, mobile : {name1 : "redmi", name2 : "vivo"}} ) // initilising properties using constructor
// console.log(obj2)
// console.log(obj2.mobile)

// ------------ Object.create() : for object creation -------------

// var obj = Object.create(null)
// obj.name = "Alok"
// obj.age = 23
// console.log(obj)

// -------------------- 1. Access Method -> DOT Notation ----------------------------------

// var user = { name : {first : "sonam", last : "Singh"}, age : 20, age : 30, }

// var p = "last"
// console.log(user.name.p) // --------- not working  
// console.log(user.name.last)

// -------------------- 1. Access Method -> Bracket Notation ----------------------------------
// console.log(user['name']["last"])
// var k = "last"
// console.log(user['name'][k])

// ----------- CRUD operation -> create, read, update, delete -------------------

        // --------------- ADD/Insert/Create--------

var user = { name : "Sonam", age : 20, }
user.city = "Goa"
user.city2 = "Mumbai"
user.temp = "35deg"

    //  ------------ Modify/Update/change ------------

user.name = "Riya"
user.city = "Delhi"

        // ----------- delete/remove -------------

delete user.city2
delete user.name

// console.log(user)

// ------------ Object Methods & this ------------ 

var name1 = "Alok"
var age = 40

var user = {
    name1 : "Sonam",
    age : 22,
    greet() { console.log("hello", name1) },
    greet2() { console.log("hello", user.name1) },
    greet3() { console.log("hello", this.name1, this.age) },
    // greet4() { return `hello, ${this.name1}, ${this.age}` },
    greet4() { return "hello "+this.name1+" "+this.age} ,
    say() { console.log("hi") },
    // arrow function
    greetArrow: () => {
        console.log("hello");}

}
// console.log(obj.greet())
// user.greet()
// user.greet2()
// user.greet3()
var p = user.greet4()
console.log(p)
// user.say()