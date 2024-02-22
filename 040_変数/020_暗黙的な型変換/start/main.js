function printTypeAndValue(value) {
    console.log(typeof value, value);
}

let a = 0;
printTypeAndValue(a);

let b = '1' + a;
printTypeAndValue(b);

let c = 15 - b;
printTypeAndValue(c);

let d = c - null;
printTypeAndValue(d);

let e = d - true;  // true:1
printTypeAndValue(e);