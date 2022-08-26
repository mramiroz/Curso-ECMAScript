var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

/*
    Podemos cambiar el contenido de la variable var y let
*/

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

/*
    No podemos reasignar una variable const
*/

const fruits = () => {
    if(true){
        var fruit1 = 'Apple'; //function scope
        let fruit2 = 'Kiwi'; //block scope
        const fruit3 = 'Banana'; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

/* 
Los block scope no se ejecutan ya que solo tienen un scope
dentro del condicional a diferencia de var que se encuentra
en toda la función.
*/

