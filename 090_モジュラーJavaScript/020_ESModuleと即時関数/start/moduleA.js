console.log("ESModule called");

let privateVal = 1;
export let publicVal = {prop: 10};

export function publicFn() {
  console.log("publicFn called: " + publicVal.prop);
  console.log(privateVal);
  privateVal++;
}

function privateFn() {}