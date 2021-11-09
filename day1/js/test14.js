/**
 * 正则
 * 匹配模式
 * i 忽略大小写
 * g 全局匹配模式
 * 
 */

var a = 'bAc';
var b = '123';
var c = '1a2B3c4D5e6';

var reg = new RegExp("a", 'i');
console.log(reg.test(a));

var reg1 = /a/i;
console.log(reg1.test(a));

var reg2 = /a|b/;
console.log(reg2.test(a));

// []里的内容是或的关系
var reg3 = /[a-z]/;
console.log(reg3.test(a));

var reg3 = /[^a-z]/;
console.log(reg3.test(b));

var d = c.split(/[A-z]/);
console.log(d);

var e = 'helloabchelloaechelloafc';
console.log(e.search(/a[A-z]c/));
console.log(e.match(/a[A-z]c/g));
console.log(e.match(/a[A-z]c/));
console.log(e.replace(/a[A-z]c/g, "@"));

var reg4 = /a{3}/;
console.log(reg4.test('baaaab'));

var reg5 = /(ab){3}/;
console.log(reg5.test('ababab'));

// {m, n}
// {m, } m次以上
var reg6 = /ba{3,}b/;
console.log(reg6.test('bb'));
console.log(reg6.test('bab'));
console.log(reg6.test('baab'));
console.log(reg6.test('baaab'));
console.log(reg6.test('baaaab'));

// + 至少一个 = {1,}
// * 零个或多个 = {0,}
// ? 零个或一个 = {0, 1}
// ^ 表示开头 ^a 以a开头
// $ 表示结尾 a$ 以a结尾

var regPhone = /^1[3-9][0-9]{9}$/;
var phone = '18016644811'
console.log(regPhone.test(phone));

// . 表示单个字符，除了换行和行结束符
// \w 任意字母、数字、_  [A-z0-9_]
// \W 除了字母、数字、_  [^A-z0-9_]
// \d 任意数字 [0-9]
// \D 除了数字 [^0-9]
// \s 空格
// \S 除了空格
// \b 单词边界
// \B 除了单词边界

var myName = '      Bonko Lee       ';
var newName = myName.replace(/^\s*|\s*$/g, '');
console.log(newName, newName.length);

var myEmail = 'bal116@pitt.edu';
var regEmail = /^[A-Za-z0-9]+([-_.][A-Za-z0-9]+)*@([A-Za-z]+[-.])+[A-Za-z]{2,5}$/;
console.log(regEmail.test(myEmail));