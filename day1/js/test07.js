/**
 * 数组
 */

// 与python类似
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(a.slice(1, 3));
console.log(a.slice(1, -1));
console.log(a.slice(1));
console.log(a.slice(-1));
console.log(a.slice(1, -1).reverse());

// 删除元素并返回，start开始索引，count删除几个, 并在开始索引插入新的元素
let b = a.splice(1, 2, 'a', 'b');
console.log(a);
console.log(b);
a.splice(3, 0, 'c', 'd', 'e');
console.log(a);

console.log(a.join(' => '));

let c = [1, 2, 3, 1, 2, 3, 1, 2, 3];
let d = new Set(c);
console.log(d);
c.sort()
console.log(c);

console.log('abc'.split(""));

let e = [1, 2, 3];
let f = [4, 5, 6];
let g = e.concat(f, f);
console.log(g);
e.push.apply(e, f);
console.log(e);

let h = 'Bonko';
let k = h.split('').reverse().join('');
console.log(h, k);

let l = [1, 2, 3, 11, 21];
l.sort((x, y) => x - y);
console.log(l);
l.sort((x, y) => y - x);
console.log(l);
