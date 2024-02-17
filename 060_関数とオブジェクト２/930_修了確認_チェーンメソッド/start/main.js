/**
 * 問題：
 * 電卓の入力と同じような挙動をするチェーンメソッド
 * を作成してみましょう。
 * 
 * 例えば、次のように使用し、結果が表示
 * されるようにします。
 * 
 * 
 * 例１）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * .minus()
 * .set(3) -> '7'を出力(10 - 3)
 * 
 * 例２）
 * const calc = new Calculator();
 * 
 * calc.set(10)
 * 	.minus()
 * 	.set(3) -> '7'を出力
 * 	.multiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */
class Calculator {
    constructor() {
        this.val = 0;
        this.result = 0;
        this.executeFunc = null;
        this.operations = {
            plus: (x, y) => x + y,
            minus: (x, y) => x - y,
            multiply: (x, y) => x * y,
            divide: (x, y) => x / y
        };
    }

    set(val) {
        this.val = val;

        this.executeFunc in this.operations ? this.result = this.operations[this.executeFunc](this.result, this.val) :
            this.result = val;
        console.log(this.result);

        return this;
    }

    plus() {
        this.executeFunc = 'plus';
        return this;
    }

    minus() {
        this.executeFunc = 'minus';
        return this;
    }

    multiply() {
        this.executeFunc = 'multiply';
        return this;
    }

    divide() {
        this.executeFunc = 'divide';
        return this;
    }
}

const calc = new Calculator();

calc.set(10)
    .minus()
    .set(3) // 7
    .multiply()
    .set(6) // 42
    .divide()
    .set(2) // 21
    .plus()
    .set(2) // 23