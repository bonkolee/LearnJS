var a = new Object();
a.name = 'Bonko';
a.age = 23;
a.isMale = true;
a["key"] = 12;
console.log(typeof a, a);
delete a.isMale;
console.log(a);
console.log(a['key']);
console.log(a.key);

a.obj = a;
console.log(a);
console.log('age' in a);

var b = {
    age: 22,
    gender: 1
};
b.name = 'qytx';
console.log(b);

var test = new Function("console.log('hello');");
console.log(typeof test);
console.log(test);
test();
test.age = 100;
console.log(typeof test);
console.log(test);

function helper() {
    console.log('helper');
}
console.log(typeof helper);
console.log(helper);

var test2 = function() {
    console.log('test2');
}
console.log(test2);

var k =[1,2,'123'];
console.log(k, typeof k);

console.log(typeof helper == 'function');
console.log(typeof helper == 'number');
console.log(typeof a.age == 'number');
