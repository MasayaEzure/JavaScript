const targetObj = { a: 0 };

const handler = {
  set: function (target, prop, value) {
    console.log(`[set]: ${prop}`);
    target[prop] = value;
    // throw new Error("cannnot add prop");
  },
  get: function (target, prop) {
    if (target.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return "-1";
    }
  },
  delete: function (target, prop) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  },
};

const pxy = new Proxy(targetObj, handler);
pxy.a = 1;
console.log(pxy.b);
delete pxy.a;
