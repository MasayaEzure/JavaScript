const a = {
  prop: 0,
};

let { prop } = a;
prop = 10;

console.log(a.prop, prop);

function fn({ prop }) {
  //   let { prop } = obj;
  prop = 1;
  console.log(a.prop, prop);
}

fn(a);

const c = {
  prop1: {
    prop2: 0,
  },
};

let { prop1 } = c;
prop1.prop2 = 10;
console.log(c, prop1);
