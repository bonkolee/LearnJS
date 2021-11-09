/**
 * 字符串方法
 */

var a = 'abcd';
console.log(a[2]);
console.log(a.charAt(1));
console.log(a.charCodeAt(1));

var b = String.fromCharCode(98);
console.log(typeof b, b);

var c = a.concat('abcd');
var d = a + 'abcd';
console.log(a, c, d, c == d);

console.log(c.split('').reverse().join(''));
console.log(c);

console.log(c.slice(1, 100));

// substring 不能接受负值，默认使用0
// 并且自动调整参数位置，如果第二个小于第一个，会自动交换
console.log(c.substring(1, 2));
console.log(c.substring(2, -1));

// 1.开始位置索引 2.截取长度
console.log(c.substr(2, 2));

console.log(c.toUpperCase());