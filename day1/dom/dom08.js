let btn = document.getElementById('btn01');
let box = document.getElementById('box1');
let box4 = document.getElementById('box4');

btn.onclick = function() {
    // 修改的是内联样式，拥有更高的优先级
    box.style.height = '300px';
    box.style.width = '300px';
    box.style.backgroundColor = 'yellow';
    
}

btn = document.getElementById('btn02');

btn.onclick = function() {
    // console.log(box.style.width);
    // 只读，不能修改
    if (window.getComputedStyle) {
        console.log(getComputedStyle(box).width);        
    } else {
        console.log(box.currentStyle.width);
    }
    // 获取内容区+内边距 只读，不能修改
    console.log(box.clientWidth, box.clientHeight);
    // 获取内容区+内边距+边框 只读，不能修改
    console.log(box.offsetWidth, box.offsetHeight);
    // 返回元素的偏移容器——定位父元素
    console.log(box.offsetParent);
    // offsetLeft 当前元素相对于其定位元素的水平偏移量
    // offsetTop 当前元素相对于其定位元素的垂直偏移量
    // 父元素padding+自身margin
    console.log(box.offsetLeft, box.offsetTop);
    // 滚动区域的长宽
    console.log(box4.scrollWidth, box4.scrollHeight);
    // 获取滚动条滚动的距离
    console.log(box4.scrollLeft, box4.scrollTop);
    console.log(box4.scrollHeight - box4.scrollTop, box4.clientHeight);
}

