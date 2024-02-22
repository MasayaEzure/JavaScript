let a = 'hello';
let b = a;
b = 'bye';
console.log(a, b);

let c = {
    prop: 'hello'
}
let d = c;
// d.prop = 'Bye';
d = {};
console.log(c, d);