let btn = document.getElementById('btn01');
let box = document.getElementById('box');

btn.onclick = function() {
    /**
     * 通过style属性来修改元素的样式，每修改一个样式，浏览器就需要重新渲染一次页面
     * 性能差，而且当需要修改多个样式时，不方便 
     */
    // box.style.width = 200 + 'px';
    // box.style.height = 200 + 'px';
    // box.style.backgroundColor = 'aquamarine';

    // 直接改class，只需渲染一次，性能好
    // 使表现和行为分离，js和css分离
    // box.className += ' b2';
    addClass(box, 'b2');
}

btn.ondblclick = function() {
    removeClass(box, 'b2');
}

function addClass(obj, cn) {
    if (!new RegExp('\\b' + cn + '\\b').test(obj.className)) {
        obj.className += ' ' + cn;
    }
}

function removeClass(obj, cn) {
    obj.className = obj.className.replace(new RegExp('\\b' + cn + '\\b'), '');
}
