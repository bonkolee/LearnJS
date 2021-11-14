let ulElement = document.getElementById('imgList');
let imgList = ['./image/IMG_3304.jpeg','./image/IMG_3305.jpeg',
'./image/IMG_3306.jpeg','./image/IMG_3307.jpeg','./image/IMG_3308.jpeg',
'./image/IMG_3309.jpeg',];
let liElemet = ulElement.firstElementChild;
let navElement = document.getElementById('navDiv');
let aElement = navElement.firstElementChild;
let aList = navElement.getElementsByTagName('a');

let threshold = imgList.length * liElemet.clientWidth;
let speed = 5;
let t;

let index = 0;

function helper() {
    console.log(this);
}

for (let i = 0; i < imgList.length - 1; i++) {
    navElement.appendChild(aElement.cloneNode(true));
}

aElement.style.opacity = 1;

for (let i = 0; i < imgList.length; i++) {
    ulElement.lastElementChild.firstElementChild.src = imgList[i];
    ulElement.appendChild(liElemet.cloneNode(true));

    aList[i].onclick = function() {
        clearInterval(t);
        aList[index].style.opacity = null;
        index = i;
        aList[index].style.opacity = 1;
        ulElement.style.left = -1 * index * liElemet.clientWidth + 'px';
    };
}

setInterval(() => {
    t = setInterval(() => {
        if (ulElement.offsetLeft - speed + threshold < 0) {
            ulElement.style.left = (ulElement.offsetLeft - speed) % threshold + 'px';
        } else {
            ulElement.style.left = ulElement.offsetLeft - speed + 'px';
        }
        if (ulElement.offsetLeft % liElemet.clientWidth == 0) {
            clearInterval(t);
            aList[index].style.opacity = null;
            index = (index + 1) % aList.length;
            aList[index].style.opacity = 1;
        }
    }, 20);
}, 2000);