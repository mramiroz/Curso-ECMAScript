function* iterate(array) {
    for(let value of array){
        yield value;
    }
}

const it = iterate(["Manu", "Oscar", "David"]);

console.log(it.next().value)