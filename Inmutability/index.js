'use strict';

// * INMUTABILITY

// * 1) USE 'const' INSTEAD OF 'let'
const obj = { 
    a: 1
 }

// * 2) WHEN MODIFY THE OBJECT (ADD, REMOVE, EDIT) USE SPREAD OPERATOR

const obj2 = {
    ...obj,
    c: 3
}

const obj3 = {
    ...obj,
    b: 2
}

console.log(obj, obj2, obj3);