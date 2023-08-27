const a = {
    prop: 0
}

const b = {
    prop: 0
}

console.log(a === b); // 参照先のオブジェクトがそれぞれ異なるので false
console.log(a.prop === b.prop); // true

const c = a;
console.log(a === c); // 参照先のオブジェクトが同じため true