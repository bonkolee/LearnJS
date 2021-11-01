function helper(num) {
    return num % 2 == 0
}
console.log(helper(2));
console.log(helper(1));

(function(a, b) {
    console.log('立即执行', a + b);
})(1, 2);

let obj = new Object();
obj.name = 'Bonko';
obj.age = 23;
obj.sayName = function() {
    console.log(this.name);
};
obj.sayName();

for (let i in obj) {
    console.log(i, obj[i], obj.i);
}