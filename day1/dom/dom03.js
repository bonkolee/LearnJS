var prev = document.getElementById('prev');
var next = document.getElementById('next');
var img = document.getElementsByTagName('img')[0];
console.log(img);
var imgList = ['./image/IMG_3304.jpeg','./image/IMG_3305.jpeg',
'./image/IMG_3306.jpeg','./image/IMG_3307.jpeg','./image/IMG_3308.jpeg',
'./image/IMG_3309.jpeg',];
var index = 0;

prev.onclick = function() {
    if (index == 0) {
        index = imgList.length - 1;
    } else {
        index--;
    }
    img.src = imgList[index];
}

next.onclick = function() {
    if (index == imgList.length - 1) {
        index = 0;
    } else {
        index++;
    }
    img.src = imgList[index];
}