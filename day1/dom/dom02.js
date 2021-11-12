let btn = document.getElementById('btn01')
btn.onclick = function() {
    let bj = document.getElementById('bj')
    console.log(bj, bj.innerHTML);
}

btn = document.getElementById('btn02')
btn.onclick = function() {
    let li = document.getElementsByTagName('li');
    let result = [];
    // for (let i = 0; i < li.length; i++) {
    //     result.push(li[i].innerHTML);
    // }
    li = new Array(...li);
    li.forEach(element => {
        result.push(element.innerHTML);
    });
    console.log(result);
}

btn = document.getElementById('btn03')
btn.onclick = function() {
    let a = document.getElementsByName('gender');
    let result = [];
    a = new Array(...a);
    a.forEach(element => {
        result.push(element.value);
    });
    console.log(result);
}

btn = document.getElementById('btn04')
btn.onclick = function() {
    let city = document.getElementById('city');
    li = city.getElementsByTagName('li');
    let result = [];
    li = new Array(...li);
    li.forEach(element => {
        result.push(element.innerHTML);
    });
    console.log(result);
}

btn = document.getElementById('btn05')
btn.onclick = function() {
    // 标签间的空白当成了文本节点
    let city = document.getElementById('city');
    console.log(city.childNodes);
    console.log(city.children);
}

btn = document.getElementById('btn06')
btn.onclick = function() {
    // 标签间的空白当成了文本节点
    let phone = document.getElementById('phone');
    console.log(phone.firstChild);
    console.log(phone.firstElementChild);
}

btn = document.getElementById('btn07')
btn.onclick = function() {
    let bj = document.getElementById('bj');
    console.log(bj.parentNode);
    // innerText会自动将html标签去除
    console.log(bj.parentNode.innerHTML);
    console.log(bj.parentNode.innerText);
}

btn = document.getElementById('btn08')
btn.onclick = function() {
    let android = document.getElementById('android');
    console.log(android.previousSibling);
    console.log(android.previousElementSibling);
}

btn = document.getElementById('btn09')
btn.onclick = function() {
    let username = document.getElementById('username');
    console.log(username.value);
}

btn = document.getElementById('btn10')
btn.onclick = function() {
    let username = document.getElementById('username');
    username.value = 'default';
}

btn = document.getElementById('btn11')
btn.onclick = function() {
    let bj1 = document.getElementById('bj');
    console.log(bj.innerText);
}

