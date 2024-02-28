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
 * 	.mutiply()
 * 	.set(6) -> '42'を出力（10 - 3) * 6
 */
class Calculator {
  constructor() {
    this.val;
    this._operator;
    this._showResult;
  }

  set(val) {
    if (this.val) {
      this._operator(this.val, val);
    } else {
      this.val = val;
    }
    return this;
  }

  _showResult(result) {
    this.val = result;
    console.log(this.val);
  }

  plus() {
    this._operator = (val1, val2) => {
      const result = val1 + val2;
      this._showResult(result);
    };
    return this;
  }

  minus() {
    this._operator = (val1, val2) => {
      const result = val1 - val2;
      this._showResult(result);
    };
    return this;
  }

  multiply() {
    this._operator = (val1, val2) => {
      const result = val1 * val2;
      this._showResult(result);
    };
    return this;
  }

  divide() {
    this._operator = (val1, val2) => {
      const result = val1 / val2;
      this._showResult(result);
    };
    return this;
  }
}

const calc = new Calculator();

calc.set(10)
    .minus()
	.set(3)
	.multiply()
	.set(6)
	.divide()
	.set(2)
	.plus()
	.set(2);
