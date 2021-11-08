/**
 * 函数有两个隐含参数
 * 1. 上下文对象this
 * 2. 封装实参的对象arguments
 * Arguments 是一个类数组对象
 * callee属性，对应一个函数对象，就是当前正在执行的函数对象
 */

function fun() {
    console.log(arguments);
    console.log(arguments instanceof Array);
    console.log(Array.isArray(arguments));
    console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
    console.log(arguments.callee, arguments.callee == fun);
}

fun(1,2,3);