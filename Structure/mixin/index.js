// * mixin

let mixin = {
    saludar() {
        console.log(`Hola ${this.nombre}`);
    },
    despedir() {
        console.log(`Chao ${this.nombre}`);
    }
};

// * clase
class Usuario {
    constructor( nombre ){
        this.nombre = nombre;
    }
};

// * Add the prototype
Object.assign(Usuario.prototype, mixin);

const usuario = new Usuario('Christian')

usuario.saludar()
usuario.despedir()