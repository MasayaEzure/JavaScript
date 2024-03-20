const targetObj = {
  a: 0,
  get value() {
    return this.b;
  },
};

const handler = {
  get(target, prop, receiver) {
    console.log(`get: ${prop}`);
    return target.hasOwnProperty(prop)
      ? Reflect.get(target, prop, receiver)
      : -1;
  },
};

const pxy = new Proxy(targetObj, handler);
console.log(pxy.value);
console.log(pxy.b);
