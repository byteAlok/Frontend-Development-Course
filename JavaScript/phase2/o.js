var user = { name : "sonam", age : 20, height : 170, }

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(Object.getOwnPropertyDescriptor(user, "name"))
// console.log(Object.getOwnPropertyDescriptors(user))

var user = {
    name1: "Sonam"
};

Object.defineProperty(user, "name1", {
    writable: false
});

user.name1 = "Riya";   // change nahi hoga
console.log(user.name1);

Object.defineProperty(user, "name1", {
    enumerable: false
});

console.log(Object.keys(user));   // empty


var user = {};

Object.defineProperty(user, "name", {
    value: "Sonam",
    writable: true,
    enumerable: true,
    configurable: true
});

console.log(user.name);

// Object.defineProperties(obj, {
//    prop1: descriptor,
//    prop2: descriptor
// })
var user = {};

Object.defineProperties(user, {
    name: {
        value: "Sonam",
        writable: true
    },
    age: {
        value: 22,
        enumerable: true
    }
});

console.log(user);





for (let key in user) {
    console.log(key, user[key]);
}


Object.keys(user).forEach(key => {
    console.log(key, user[key]);
});


for (let [key, value] of Object.entries(user)) {
    console.log(key, value);
}

Object.values(user).forEach(value => {
    console.log(value);
});




for (let key in user) {
    console.log(key, Object.getOwnPropertyDescriptor(user, key));
}

// 👉 Agar hidden property (enumerable:false) bhi print karni ho
Object.getOwnPropertyNames(user).forEach(key => {
    console.log(key, user[key]);
});