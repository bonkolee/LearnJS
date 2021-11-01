console.log(window);
let a = 1;
var b = 2;
console.log(window.a);
console.log(window.b);

function helper() {
    console.log('FUNCTION');
}

c = 11;

/**
 * 使用var声明的变量，会在所有的代码执行之前声明(但不会赋值)
 * 函数声明提前，使用function 函数名() {}, 会在所有代码执行之前被创建，
 *  因此可以在声明前调用。
 * 使用函数表达式创建的函数，不会被声明提前，
 *  因此不能再声明前使用。
 */
console.log(d);
var d = 10;

// console.log(e);
// e = 20;

test1();
function test1() {
    console.log('FUNCTION test1');
}

// test2();
// var test2 = function () {
//     console.log('FUNCTION test2');
// }

/**
 * 在函数作用域中可以往问道全局变量
 * 在函数作用域中操作一个变量时，现在自己作用域里面找，找不到去上一级作用域去找
 * 函数中不使用var声明的变量，都会成为全局变量
 */
function test2() {
    console.log(a);
}
test2();

function test3() {
    console.log(a);
    var a = '123';
    console.log(a);
    console.log(window.b);
}
test3();
console.log(a);
