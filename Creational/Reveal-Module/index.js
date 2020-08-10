const resultado = ( () => {
    // * PRIVATE PROPERTY
    const x = {}

    return {

        // * PUBLIC API
        a: () => console.log(x),
        b: (key, val) => x[key] = val

    }

})()

resultado.a()

resultado.b('queso', 'cabra')
resultado.b('yogurt', 'fresa')
resultado.a()

console.log(resultado.x)