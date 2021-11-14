let cElement = document.getElementById('count');
let img = document.getElementsByTagName('img')[0];
let btn1 =  document.getElementById('start');
let btn2 =  document.getElementById('stop');

let imgList = ['./image/IMG_3304.jpeg', './image/IMG_3305.jpeg',
                './image/IMG_3306.jpeg', './image/IMG_3307.jpeg', 
                './image/IMG_3308.jpeg', './image/IMG_3309.jpeg'];
// 每隔1s执行一次
let i = 0;
let timer = setInterval(() => {
    cElement.innerHTML = ++i;
    if (i == 10) {
        // 关闭定时器
        clearInterval(timer);
    }
}, 1000);

// 一号定时器
console.log(timer);

let timer2;
let j = 0;
btn1.onclick = function() {
    if (!timer2) {
        timer2 = setInterval(() => {
            j++;
            j %= imgList.length;
            img.src = imgList[j];
        }, 100);
    } else {
        console.log('already start');
    }
};

btn2.onclick = function() {
    if (timer2) {
        clearInterval(timer2);
        timer2 = null;
    } else {
        console.log('already end');
    }
};

// setTimeout 延时调用
let tList = [];
for(let k = 0; k < 10; k++) {
    tList.push(setTimeout(() => {
        console.log(k);
    }, 3000));
}

for(let k = 0; k < 10; k += 2) {
    clearTimeout(tList[k]);
}
