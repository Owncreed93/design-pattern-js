const f = (ruta, cb) => {
    // * LOTS OF LINE OF CODE AFTER
    const resultado = computacionPesada()

    cb(resultado)
}

const manejaResultado = (resultado) => {

}

f('/users', manejaResultado)

// * THIS AN USUAL EXPRESS CONTROLLER
/**
 * EVEN THOUGH THIS IS A COMMON PRACTICE
 * IT'S IS A BAD PRACTICE BECAUSE IT DELIVERS
 * PROBLEMS WHEN YOU RUN UNIT TEST
 */
app.get('/users', (req,res) => {

})

