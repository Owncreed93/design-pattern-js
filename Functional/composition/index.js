const users = [
    { edad: 17, nombre: 'Nicolas', apellido: 'Soto' },
    { edad: 18, nombre: 'Chanchito', apellido: 'Feliz' },
    { edad: 12, nombre: 'Loreto', apellido: 'Fernandez' },
    { edad: 1, nombre: 'Sofia', apellido: 'Zapata' },
]

const compose = (...fns) => x => fns.reduceRight( (y, f) => f(y), x);

const pipe = (...fns) => x => fns.reduce( (y, f) => f(y), x );

const trace = x => y => console.log(x, y)

const filter = f => xs => xs.filter(f);

const head = xs => xs[0];

const formateo = x => ({
    nombreCompleto: `${nombreCompleto} ${x.apellido}`,
    edad: x.edad
})

const formato = x => `${x.nombreCompleto} tiene ${x.edad} año(s)`;

// const traePrimerInfante = data => {
//     formato( formateo( head( data.filter( x => x.edad < 2) ) ) );
    // const primerInfante = infantes[0];
    // const infante = {
    //     nombreCompleto: `${infante.nombre} ${infante.apellido}`
    // };

    // return `${infante.nombreCompleto} tiene ${infante.edad} año(s)`;
//     compose(
//         formato,
//         formateo,
//         head,
//         filter( x => x.edad < 2 )
//     )
// }

const traePrimerInfante = pipe(
    filter( x => x.edad < 2 ),
    trace('Despues de filter'),
    head,
    formateo,
    formato,
    
)