const a = {
    prop: 0
}

// オブジェクトのプロパティ名と変数名は同じである必要がある
let { prop } = a;
prop = 1;
let { b } = a;

console.log(a, prop);
console.log(b); // undefined となる

function fn({
    prop
}) {
    prop = 1;
    console.log(a, prop);
}

fn(a);

const c = {
    prop1: {
        prop2: 0
    }
}

let { prop1 } = c;
console.log(prop1);

prop1.prop2 = 1;
console.log(c, prop1);