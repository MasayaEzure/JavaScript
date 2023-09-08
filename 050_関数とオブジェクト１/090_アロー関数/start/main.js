function a(name) {
    return 'hello ' + name;
}

// 関数式
const b = function(name) {
    return 'hello ' + name;
}

// アロー関数
const c = (name, name2) => {
    return 'hello ' + name + ' ' + name2
};
const d = _ => 'dummy';

console.log(c('Tom', 'Bob'));
console.log(d());