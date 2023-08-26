 let a = 0;
 // window オブジェクトのプロパティとして値が保持される
 var b = 0;

 function c() {}

 //  debugger; // この行に達した時点でブラウザの動作が一時停止する

 window.num = 10;
 //  スコープチェーンによって参照する値が変わってしまう
 let num = 12;
 console.log(num);