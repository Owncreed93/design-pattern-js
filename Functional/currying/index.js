const suma = (a, b) => a + b;

/**
 * CURRYING
 * IS THE TECHNIQUE THAT TRANSFORM ALL FUNCTION
 * ON UNARY FUNCTION
 */

 // * TRANSFORMING INTO CURRING
 const suma_currying = a => b => a + b;

 const suma1 = suma_currying(1);

 console.log(suma1(5));