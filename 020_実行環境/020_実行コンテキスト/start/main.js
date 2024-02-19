// グローバルコンテキスト
const a = 0;
function b() {
    // 関数コンテキスト
    console.log(this);
    console.log(arguments);
    console.log(a);
}

console.log(a);
b();
