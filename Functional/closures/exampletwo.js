// * PUBLIC REACH
const y = 'lele';

const f = () => {
    // * F'S PRIVATE REACH
    const x = 'lala';
    return () => {
        // * ANONYMUS FUNCTION PRIVATE REACH
        const z = 'lol';
        console.log(x, y, z);
    }
       
}