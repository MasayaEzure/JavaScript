// マクロタスク
setTimeout(function task1() {
  console.log('task1');
});

// マイクロタスク
new Promise(function promise(resolve) {
  console.log('promise'); // 同期処理
  resolve();
}).then(function job1() {
  console.log('job1'); // 非同期処理
});

// グローバル
console.log('global end');