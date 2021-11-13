let box = document.getElementById('box1');

box.addEventListener('mousedown', function(event) {
    let offsetX = event.clientX - box.offsetLeft;
    let offsetY = event.clientY - box.offsetTop;
    document.onmousemove = function(event) {
        box.style.left = event.clientX - offsetX + '.px';
        box.style.top = event.clientY - offsetY + '.px';
    };
    document.addEventListener('mouseup', function(event) {
        document.onmousemove = null;
        document.onmouseup = null;
    });
    // 取消默认行为
    return false;
});