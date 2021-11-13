let s1 = document.getElementById('s1');

/**
 * 事件的冒泡
 * 当后代元素上的事件被触发时，其祖先元素的相同事件也会被触发
 * 大部分情况中，冒泡都是有用的 
 * 如果不需要，可以通过实践对象来取消冒泡
 *  
 */

s1.onclick = function(event) {
    event.cancelBubble = true;
    console.log('span');
}

let box1 = document.getElementById('box1');
box1.onclick = function() {
    console.log('box');
}

document.body.onclick = function() {
    console.log('body');
}

function helper() {
    console.log(this);
}

let ul = document.getElementById('u1');
ul.onclick = function(event) {
    /**
     * 事件的委派
     * 统一绑定给共同的祖先元素，当后代元素上的事件触发时，会一直冒泡到祖先元素
     * 从而通过祖先元素的响应函数来处理事件
     * 可以减少时间绑定的次数，提高程序的性能
     */
    if (event.target.tagName == 'A') {
        console.log(event.target);
    }
}

let count = document.getElementsByTagName('li').length;
let btn = document.getElementById('btn01');
btn.onclick = function() {
    let newLi = document.createElement('li');
    newLi.innerHTML = "<a href='javascript:;'>HREF" + ++count + "</a>";
    document.getElementById('u1').appendChild(newLi);
}

/**
 * 第三个参数为，是否在捕获阶段出发函数
 */
btn.addEventListener('click', function() {
    console.log('click');
}, false);

/**
 * 事件的传播
 * 
 * 1. 捕获阶段
 *  在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获
 *  但是默认此时不会触发事件
 * 2. 目标阶段
 *  事件捕获到目标元素，捕获结束开始在目标元素上触发事件
 * 3. 冒泡阶段
 *  事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件
 */
