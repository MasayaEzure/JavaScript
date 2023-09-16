'use strict'

const obj = {};
Object.defineProperty(obj, 'prop', {
    configurable: true,
    value: 0,
    writable: true
});

delete obj.prop;

// obj.prop = 1;
console.log(obj.prop);

const descripter = Object.getOwnPropertyDescriptor(obj, 'prop');
console.log(descripter);