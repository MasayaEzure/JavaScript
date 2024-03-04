/**
 * 問題：
 * 引数で与えた範囲の値をステップ毎に返却する
 * genStepというイテレーターを生成する関数を作成しましょう。
 *
 * - genStepの要件
 * 引数にmin, max, stepを取ります。
 * min：下限値
 * max：上限値
 * step：ステップ
 *
 * 以下のように実行した場合には
 * const it = genStep(4, 10, 2);
 * let a = it.next();
 *
 * while(!a.done) {
 *  console.log(a.value); -> 4, 6, 8, 10
 *  a = it.next();
 * }
 *
 * の値が順番にコンソールに表示されます。
 */
function genStep(min = 0, max = 20, step = 1) {
  let result = 0;
  let isContinue;

  return {
    next: function () {
      result === 0 ? (result = min) : (result += step);
      result > max ? (isContinue = true) : (isContinue = false);
      return {
        done: isContinue,
        value: result,
      };
    },
  };
}

const it = genStep(4, 10, 2);
let a = it.next();

while (!a.done) {
  console.log(a.value);
  a = it.next();
}
