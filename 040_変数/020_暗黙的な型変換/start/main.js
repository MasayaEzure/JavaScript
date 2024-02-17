function printypeAndValue(val) {
    console.log(typeof val, val);
}
let a = 0;
printypeAndValue(a);

let b = parseInt('1') + a;
printypeAndValue(b);

let c = 15 - b;
printypeAndValue(c);

let d = c - null;
printypeAndValue(c);

let e = d - true;
printypeAndValue(e);