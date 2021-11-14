let box = document.getElementById('box1');

box.onwheel = function(event) {
    if (event.wheelDelta > 0) {
        box.style.width = box.clientWidth + 2 + '.px';
        box.style.height = box.clientHeight + 5 + '.px';
    } else {
        box.style.width = box.clientWidth - 2 + '.px';
        box.style.height = box.clientHeight - 5 + '.px';
    }

    // 与return false 相同
    event.preventDefault && event.preventDefault();
    return false;
}

// onkeydown 连续触发时，第一次和第二次之间卡一下，防止误操作
document.onkeydown = function(event) {
    console.log(event.altKey);
    if (event.key == 'ArrowRight') {
        box.style.left = box.offsetLeft + 5 + '.px';
    } else if (event.key == 'ArrowLeft') {
        box.style.left = box.offsetLeft - 5 + '.px';
    } else if (event.key == 'ArrowDown') {
        box.style.top = box.offsetTop + 5 + '.px';
    } else if (event.key == 'ArrowUp') {
        box.style.top = box.offsetTop - 5 + '.px';
    }

    event.preventDefault && event.preventDefault();
    return false;
}