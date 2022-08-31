class User{};

//const newUser = new User();

class user {
    //metodos
    greetings(){
        return 'Hello';
    }
}

const mrz = new user();
console.log(mrz.greetings())
const bebeloper = new user()
console.log(bebeloper.greetings())

//constructor

class user{
    //constructor
    constructor(){
        console.log("Nuevo Usuario")
    }
    greetings(){
        return 'Hello';
    }
}

const david = new user()

// this

class user{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello'
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana')
console.log(ana.greetings())

// setter getters

class user {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return "Hello"
    }
    greetings(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const ignacio = new user('David', 15)
console.log(ignacio.uAge)
console.log(ignacio.uAge = 20)