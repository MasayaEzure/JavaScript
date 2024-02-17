window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name); // this：オブジェクトのメソッドを参照
        a();

        const person = {
            name: 'Tim',
            hello: function() {
                console.log('Hello ' + this.name); //this：オブジェクトのメソッドを参照
                a();
            }
        };
        person.hello();
    }
};
// const ref = person.hello;
// ref();

person.hello();

function a() {
    console.log('Hello ' + this.name); // this：グローバルオブジェクトを参照
}