/**
 * 問題１：
 * setTimeoutの実行から１秒後にブラウザの
 * コンソールに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 */
const person = {
    hello: function() {
        return 'hello Tom';
    }
}

setTimeout(function() {
    console.log(person.hello())
}, 1000);

/**
 * 問題２：
 * setTimeoutの実行から１秒後にブラウザの
 * ダイアログに'hello Tom'と表示されるように
 * 実装してみましょう。
 * 
 * ※必ずperson.helloメソッドは解答内で使用してください。
 * ※alertは第一引数に渡した文字列を画面のダイアログに表
 * 示する関数です。
 */
setTimeout(function() {
    alert(person.hello())
}, 1000);

/**
 * 問題３：
 * objにgreetingというメソッドを実装しました。
 * これをsetTimeoutで１秒後に表示するようなafter1sの
 * 関数にコールバックとして渡しました。
 * その後objに格納したgreeting関数を別の関数で
 * 上書きしました。
 * この時、１秒後にコンソールに出力されるのは
 * 'hello'または'hey'のどちらでしょうか？
 */
const obj = {};
obj.greeting = function() {
    console.log('hello');
}

function after1s(callack) {
    setTimeout(callack, 1000);
}

// この時点で実行します。
after1s(obj.greeting);

// この後でgreetingを書き換えます。
obj.greeting = function() {
    console.log('hey');
}


/**
 * 問題４：
 * 以下のcalcFactoryを修正して、計算式を
 * コンソール(console.log)に表示するか、
 * ダイアログ(alert)に出力するかを
 * 使い分けできるようにしてください。
 * 
 * ※コールバック関数を用いて実装してください。
 */
function calcFactory(val, callback) {
    return {
        operate: function(target, operator, symbol) {
            const operators = {
                plus: (a, b) => a + b,
                minus: (a, b) => a - b,
                multiply: (a, b) => a * b,
                divide: (a, b) => a / b
            };
            const newVal = operators[operator](val, target);
            callback(`${val} ${symbol} ${target} = ${newVal}`);
            val = newVal;
        }
    }
}

const calc = calcFactory(10, console.log);
calc.operate(5, 'plus', '+');
calc.operate(3, 'minus', '-');
calc.operate(3, 'multiply', '×');
calc.operate(2, 'divide', '/');