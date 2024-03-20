const targetObj = { a: 0 };

const handler = {
  // トラップ
  set(target, prop, value, receiver) {  // receiver：インスタンス化されたProxyのオブジェクト
    console.log(`set: ${prop}`);
    target[prop] = value;
    // throw new Error("cannot add prop");
  },
  get(target, prop, receiver) {
    console.log(`get: ${prop}`);
    return target.hasOwnProperty(prop) ? target[prop] : -1;
  },
  delete(target, prop) {
    console.log(`delete: ${prop}`);
    delete target[prop];
  }
};

// 第二引数：第一引数を操作した際に実行される、メソッドが格納されたオブジェクト
const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
pxy.b;
delete pxy.a;