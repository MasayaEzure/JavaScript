/**
 * 問題：
 * Arrayを継承して以下のメソッドを実装してみましょう。
 *
 * push(*1)
 * forEach
 * map
 * filter
 * reduce
 *
 * *1:pushはチェーンメソッドとしてつなげられるように実装してみてください。
 */
class MyArray extends Array {
  constructor(...args) {
    super(...args);
  }

  print(label = "") {
    console.log(`%c ${label}`, "color: blue; font-weight: 600;", this);
    return this;
  }

  push(val) {
    super.push(val);
    return this;
  }

  forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  }

  map(double) {
    const newInstance = new MyArray();
    this.forEach(function (elem) {
      let result = double(elem);
      newInstance.push(result);
    });
    return newInstance;
  }

  filter(cb) {
    const newInstance = new MyArray();
    this.forEach(function (elem) {
      if (cb(elem)) {
        newInstance.push(elem);
      }
    });
    return newInstance;
  }

  reduce(cb, accu) {
    // 第二引数がわたってこなかった場合の処理
    const tempArry = [...this];
    accu === undefined ? (accu = tempArry.shift()) : this;
    for (let i = 0; i < tempArry.length; i++) {
      accu = cb(accu, tempArry[i]);
    }
    return accu;
  }
}

function double(v, i, obj) {
  return v * 2;
}

const original = new MyArray(1, 2, 3, 4);

const result = original
  .map(double)
  .push(5)
  .filter(function (v, i) {
    return v > 2;
  })
  .reduce(function (accu, curr) {
    return accu + curr;
  });

console.log("%coriginal", "color: blue; font-weight: bold;", original);
console.log("%cresult", "color: red; font-weight: bold;", result);
