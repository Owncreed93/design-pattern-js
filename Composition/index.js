const saludar = name => console.log(`Hola! soy ${name}`);
const despedir = () => console.log(`Adios!`);
const dormir = () => console.log(`Zzzzzzz`);

// * 
const person = {
    nombre: 'Christian',
    // * ARROW FUNCTION TYPE
    saludar: () => saludar(person.nombre)
    // FUNCTION DECLARATION TYPE
    // saludar: function() { saludar(this.nombre) }
}

// * OBJECT LITERAL
class persona {
    constructor() {
        this.nombre = 'Christian'
    }

    // * COMPOSITION
    saludar() {
        saludar(this.nombre);
    }

    despedir(){
        despedir();
    }

    dormir(){
        dormir();
    }


}

class robot {
    constructor() {
        this.nombre = 'Robocop'
    }

    saludar() {
        saludar(this.nombre);
    }

    despedir() { despedir() };
}

let per = new persona();

console.log(per.saludar());
console.log(per.despedir());
console.log(per.dormir());

let rob = new robot();

console.log(rob.saludar());
console.log(rob.despedir());