//  グローバルコンテキスト
let name = 'Taro';

function hello() {
    // 関数コンテキスト
    console.log(this, arguments, name);
}

console.log(name);
hello();