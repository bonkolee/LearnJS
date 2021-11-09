/**
 * 包装类
 * 基本数据类型
 * String Number Boolean Null Undefined
 * 引用数据类型
 * Object
 * 在JS中为我们提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转化为对象
 * String() 将基本数据类型字符串转换为String对象
 * Number() 将基本数据类型数字转换为Number对象
 * Boolean() 将基本数据类型布尔值转换为Boolean对象
 * 
 * 方法和属性可以添加给对象，不能添加给基本数据类型
 * 当使用基本数据类型调用属性和方法时，浏览器会临时使用包装类将其转换为对象
 * 然后再调用对象的属性和方法
 * 调用完之后，再将其转换为基本数据类型
 */

var a = new Number(3);
var b = new Number(3);
var c = new String('hello');
var d = new Boolean(true);
console.log(typeof a, a);
console.log(typeof b, b);
console.log(typeof c, c);
console.log(typeof d, d);
console.log(a == b, a + b);
console.log(d == true, b === true)

if (new Boolean(false)) {
    console.log('new Boolean(false) 运行了');
}

var e = 3;
e = e.toString();
console.log(e, typeof e);

var f = 3;
f.name = 'Bonko';
// 转换为Number对象，添加属性，然后销毁，因此f没有name属性
console.log(f, f.name);