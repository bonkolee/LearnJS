/**
 * DOM
 * document object model
 * 
 * 节点——构成HTML文档的最基本单元
 * 文档节点、元素节点、属性节点、文本节点
 */

console.log(document);
var btn = document.getElementById("btn");
btn.innerHTML = '@_@';
console.log(btn);

btn.addEventListener('click', () => {
    console.log('Hello');
});

btn.addEventListener('click', () => {
    console.log('World');
});

btn.addEventListener('dblclick', () => {
    console.log('DOUBLE');
});

// btn.addEventListener('mousemove', () => {
//     console.log('MOUSEMOVE');
// });

btn.onclick = function() {
    console.log('onclick');
}

// onload 在整个页面加载完成之后触发
window.onload = function() {
    console.log('window加载完成');
}

var btns = document.getElementsByTagName('button');
console.log(btns);