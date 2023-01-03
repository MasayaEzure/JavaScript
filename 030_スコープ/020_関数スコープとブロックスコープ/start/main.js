function a() {
    // 関数スコープ
    let num = 0;
    console.log(num);
}
a();

{
    // ブロックスコープ
    let num2 = 10;
    const number = 20;
    // ブロックスコープが無視され、意図しない挙動を取るので var は非推奨
    var num3 = 1;

    console.log(num2);
    console.log(number);

    // 関数宣言ではブロックスコープは無視されるため、スコープ外でも呼び出せる
    const b = function() {
        console.log('this is called.');
    }
    b();
}

// var なので出力可能
console.log(num3);