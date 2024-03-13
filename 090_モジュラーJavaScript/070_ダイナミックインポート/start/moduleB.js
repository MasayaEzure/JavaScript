// import("./moduleA.js").then(function ({ publicVal, publicFn }) {
//   publicFn();
//   console.log(publicVal);
// });

async function fn() {
  const modules = await import("./moduleA.js");
  modules.publicFn();
  console.log(modules.publicVal);
}

fn();
