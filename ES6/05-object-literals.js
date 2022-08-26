// enhaced object literals

function newUser(user, age, country){
    return{
        user,
        age,
        country
    }
}

console.log(newUser("mrz", 20, "ES"))