/**
 * Math
 */

console.log(Math.PI);
// 包括0，不包括1
let a = [];
for (var i = 0; i < 5; i++) {
    a.push(Math.floor(Math.random() * 100 + 1));
}
console.log(a)
console.log(Math.max(...a));
console.log(Math.max.apply(null,a));

console.log(2 ** 3);