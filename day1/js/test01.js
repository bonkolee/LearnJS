// JavaScript 实现 ECMAScript标准，并实现DOM和BOM
// alert("外部");

// DOM document Object Model

/**
 * 这是一个注释
 */
function helper() {
    alert('Hello World!!');
}

document.querySelector(".title").onclick = function () {
    alert("querySelector");
}

document.write("<h2>Hello</h2>");

console.log(Number.POSITIVE_INFINITY);
console.log(Infinity);
console.log(typeof Infinity);
console.log(-Infinity);
console.log(typeof -Infinity);
console.log(-Number.MAX_VALUE);

var a;
console.log(a);
console.log(undefined);
var b = 1;
console.log(b.toString());
console.log(typeof b.toString());
console.log(String(a));

var c = '123px';
c += '10';
console.log(c);
c = '123px';
console.log(parseInt(c));
console.log(parseFloat(c));

var a = '16';
console.log(parseInt(a, 10));

console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));
if ('') {
    console.log(12345);
}
// 将字符串看作多少进制.
console.log('++++++');
console.log(1 + NaN);
console.log(1 + undefined);
console.log(1 + null);
console.log('++++++');
console.log(123+'abc');
var d = 123+'';
console.log(typeof d, 123);

var e = 1 + 2 + '3';
console.log(e); // 33
e = '1' + 2 + 3;
console.log(e); // 123
e = '12';
console.log(typeof e, e);
console.log(typeof (e-0), e - 0);
console.log(typeof -'18', -'18');
e = 1 + '2' + 3;
console.log(e); // 123
e = 1 + +'2' + 3;
console.log(e); // 6

// 字符串和任何值相加，都会先转化为string，再拼接
// 任何值做 * / -，都会先转化为number
// 使用 +，可以将其它类型转换为number;

// var a = prompt("HINT");
// console.log(a);
// alert(a);