function F(a, b) {
    this.a = a;
    this.b = b;
    return { a: a, b: b };
}

// F.prototype.c = function() {}

function newOpe(C, ...args) {
    const _this = Object.create(C.prototype); // コンストラクタのプロトタイプをコピー
    const result = C.apply(_this, args);
    if (typeof result === 'object' && result !== null) {
        return result;
    }

    return _this;
}

const a = newOpe(F, 1, 2);
console.log(a);