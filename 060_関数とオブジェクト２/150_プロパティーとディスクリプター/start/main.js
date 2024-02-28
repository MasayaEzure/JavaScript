'use strict'
// const obj = {
//     prop: 0,
// }
const obj = {};

Object.defineProperty(obj, "prop", {
    configurable: true,
    value: 10,
    writable: true,
});

delete obj.prop;

// obj.prop = 2;
console.log(obj.prop);

const descriptor = Object.getOwnPropertyDescriptor(obj, "prop");
console.log(descriptor);