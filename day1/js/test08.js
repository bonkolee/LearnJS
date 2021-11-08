/**
 * call() apply()
 * 是函数对象的方法，需要通过函数对象来调用
 * 调用时可将一个对象指定为第一个参数，这个对象称为函数执行时的this
 * call()可以讲实参在对象之后依次传递
 * apply()需要将实参封装到数组中统一传递
 */

function fun() {
    console.log(this);
}

var obj = {name: 1, sayName: function() {console.log(this.name)}};
var obj2 = {name: 2};

fun.call(obj);
fun.apply(obj);

obj.sayName();
obj.sayName.apply(obj2);