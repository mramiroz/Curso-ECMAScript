//arrays destructuring

let fruits = ["Apple", "Banana"]
let [a, b] = fruits;

console.log(a, fruits[1]);

// object destructuring

let user = {username:'Manu', age: 18}
let{username, age} = user;

console.log(username, age)

// spread operator

let person = {name: 'oscar', age: 28}
let country = 'MX'

let data  = {...person, country}
console.log(data)

//rest

function sum(num, ...values){
    console.log(values)
    console.log(num + values[0])
    return num + values[0]
}

sum(2, 2, 3, 4)