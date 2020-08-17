// * PUBLIC REACH
const y = 'lele';

const f = () => {
    // * PRIVATE REACH
    const x = 'lala';
    console.log(x, y);
}

const g = () => {
    const a = 'lili';
    console.log(a, y);
    console.log(a, x);
}

f();

g();
