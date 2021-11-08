/**
 * Date
 * 直接使用构造函数创建，会封装成当前代码执行的时间
 */

let a = new Date();
console.log(a);

let b = new Date('02/04/1998 11:10:30');
console.log(b);

console.log(a - b);

// 获取周几 (0-6) 周日=0
console.log(b.getDay());
// 获取几日 (1-31)
console.log(b.getDate());
// 获取几月 (0-11)
console.log(b.getMonth() + 1);
// 获取年份
console.log(b.getYear() + 1900); // 废弃 1900=0
console.log(b.getFullYear());

// 获取日期的时间戳 cong 1970年1月1日0时0分0秒 到当前日期的 毫秒数
// 1秒 = 1000毫秒
// 计算机底层保存时间时使用时间戳
console.log(b.getTime());
console.log(b.getTime() / 1000 / 60 / 60 / 24 / 365);

let c = new Date('01/01/1970 0:0:0');
console.log(c.getTime());
console.log(c.getTime() / 1000 / 60 / 60);

let d = Date.now();
console.log(d);
for (var i = 0; i < 999999999; i++) {
}
let e = Date.now();
console.log(e);
console.log(e - d);