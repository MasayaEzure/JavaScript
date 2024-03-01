const obj = {
  prop1: "value1",
  prop2: "value2",
  prop3: "value3",
};

Object.prototype[Symbol.iterator] = function () {
  const keys = Object.keys(this); // 配列に変換
  let i = 0;
  const _this = this;
  return {
    next() {
      const key = keys[i++];
      return {
        value: [key, _this[key]],
        done: i > keys.length,
      };
    },
  };
};

// const items = Object.entries(obj);
for (let [k, v] of obj) {
  console.log(`${k}, ${v}`);
}
