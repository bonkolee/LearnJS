/**
 * 数组
 */

let a = new Array(1,2,3);
a[0] = 10;
a[4] = 20;
a.length = 100;
console.log(a, typeof a, a[3]);
console.log(a.length);

let b = new Array();
b[b.length] = 1;
b[b.length] = 2;
console.log(b);

let c = [1, 2, 3];
console.log(c);

let d = new Array(10);
console.log(d);

let e = ['hello', 1, true, new Array()];
console.log(e);

let f = [[1,2,3], [4,5,6], [7,8,9]];
console.log(f);

let g = ['a', 'b', 'c'];

let result = g.push('d', 'e');
console.log(g);
console.log(result);

console.log(g.pop());
console.log(g);

g.unshift('x', 'y', 'z');
console.log(g);

console.log(g.shift());
console.log(g);

// 数组遍历
for (var i = 0; i < g.length; i++) {
    console.log(g[i]);
}

var h = [1, 2, 3, 4, 5, 6, 7, 8];
var k = h.filter(x => x > 4);
console.log(k);
var l = k.map(x => String(x));
console.log(l);
var m = k.reduce((x, y) => x + y);
console.log(m);

k.forEach((value, index, obj) => {
    console.log(value, index, obj);
});

k.forEach((value, index, obj) => {
    k.push(value);
    console.log(obj);
});
console.log(k);

console.log(self);
console.log(this);
console.log(self == this);