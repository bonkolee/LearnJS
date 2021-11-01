/**
 * 机械起在调用函数每次都会向函数内部传递一个隐含的参数，
 * 这个隐含参数就是this，this指向的是一个对象
 * 这个对象成为函数执行的上下文对象
 * 1.以函数形式调用时，指向window
 * 2.以方法形式调用时，指向调用方法的对象
 */

let a = 0;
var b = 1;
this.c = 2;

console.log(this);
console.log(this.a);
console.log(this.b);

function test() {
    console.log(this);
}

test();

var obj = {
    name: 'ersha',
    sayName: function () {
        console.log(this);
    }
}

obj.sayName();

/**
 * 使用工厂方法创建对象
 * 使用的构造函数都是Object，因此类型都是object，无法区分不同类型对象
 */
function createPerson(name, age, gender) {
    let obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.gender = gender;
    obj.helper = function() {
        console.log(this.name, this.age, this.gender);
    };
    return obj;
}

p1 = createPerson('Bonko', 23, 'male');
p2 = createPerson('qytx', 22, 'female');

console.log(typeof p1, '+', p1);
console.log(typeof p2, '+', p2);

p1.helper();
p2.helper();

/**
 * 使用构造函数创建对象
 * 1.创建一个新的对象
 * 2.将新建的对象设置为函数中的this，在构造函数中可以使用this指向自己
 * 3.助航执行函数中的代码
 * 4.将新建的对象作为返回值返回
 */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;

    //这种方法一个object就有一个自己的function
    // this.helper = function() {
    //     console.log(this.name, this.age, this.gender);
    // };
    
    // 每个object共用同一个function，但是需要把function创建在全局中
    // this.helper = pHelper;    
}

// 使用prototype，最佳
Person.prototype.helper = function() {
    console.log(this.name, this.age, this.gender);
};

function pHelper() {
    console.log(this.name, this.age, this.gender);
};

let p3 = new Person('Bonko', 23, 'male');

Person.prototype.toString = function() {
    console.log('++++Person.prototype.toString()', this.name, this.age, this.gender);
};

console.log(typeof p3, '+', p3);
let p4 = new Person('qytx', 22, 'female');
console.log(typeof p4, '+', p4);
p3.helper();
p4.helper();
console.log(p3 instanceof Person);
console.log(p3 instanceof Object);
console.log('方法是否一样', p3.helper == p4.helper);

/**
 * 当使用一个对象的属性或方法时，会在自身中寻找
 * 没找到，就去原型对象中找
 * 原型对象中没有，就去原型对象的原型对象中找
 * 直到找到Object对象的原型
 * 如果Object的原型没找到，就返回undefined
 */
console.log('Person的prototype', Person.prototype);
console.log('p3的prototype', p3.prototype);
console.log('p3的__proto__', p3.__proto__);
console.log('对象与Person的prototype是否一样', Person.prototype == p3.__proto__);
console.log('p3使用in寻找属性', 'helper' in p3);
console.log('p3使用hasOwnProperty寻找属性', p3.hasOwnProperty('helper'));
console.log('Person使用in寻找属性', 'helper' in Person);
console.log('Person使用hasOwnProperty寻找属性', Person.hasOwnProperty('helper'));

console.log('p3使用hasOwnProperty寻找hasOwnProperty', p3.__proto__.hasOwnProperty('hasOwnProperty'));
console.log('p3使用原型的原型的hasOwnProperty寻找hasOwnProperty', p3.__proto__.__proto__.hasOwnProperty('hasOwnProperty'));

console.log('p3的原型的原型', p3.__proto__.__proto__);
console.log('p3的原型的原型的原型', p3.__proto__.__proto__.__proto__);

console.log('p3' + p3);
console.log('p3', p3);
/**
 * 
 */

class Dog {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    helper() {
        console.log('class创建的方法', this.name, this.age, this.gender);
    }
}
let p5 = new Dog('ersha', 9, 'female');
console.log(typeof p5, '+', p5);
let p6 = new Dog('Max', 3, 'male');
console.log(typeof p6, '+', p6);
p5.helper();
p6.helper();
console.log(p5 instanceof Dog);
console.log(p5 instanceof Object);

/**
 * 垃圾回收
 */
p1 = null;
p2 = null;
p3 = null;
p4 = null;
p5 = null;
p6 = null;
console.log(p1, p2, p3, p4, p5, p6);