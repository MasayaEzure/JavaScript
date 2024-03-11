import defaultVal, {publicVal as val, publicFn as fn} from "./moduleA.js";
console.log(defaultVal);
console.log(val);
fn();

// import defaultVal, * as moduleA from "./moduleA.js";
// console.log(moduleA.publicVal);
// moduleA.publicFn();