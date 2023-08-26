// グローバルスコープ (a, fn1)
let a = 2;

function fn1() {
    // 関数スコープ① (b, fn2)
    // グローバルスコープを参照可能
    let b = 1;

    function fn2() {
        // 関数スコープ (c)
        // グローバルスコープと関数スコープ①を参照可能
        let c = 0;
        console.log(b);
    }
    fn2();
}
fn1();