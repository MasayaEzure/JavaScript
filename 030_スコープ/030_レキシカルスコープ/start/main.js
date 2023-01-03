// グローバルスコープ (num, fn1)
let num = 2;

function fn1() {
    // 関数スコープ① (num2, fn2)
    // グローバルスコープを参照可能
    let num2 = 1;

    function fn2() {
        // 関数スコープ (num3)
        // グローバルスコープと関数スコープ①を参照可能
        let num3 = 0;
        console.log(num2);
    }
    fn2();
}
fn1();