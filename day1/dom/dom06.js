let btn = document.getElementById('btn01');
btn.onclick = function() {
    let node = document.createElement('li');
    node.innerHTML = '广州';
    let city = document.getElementById('city');
    city.appendChild(node);
}

btn = document.getElementById('btn02');
btn.onclick = function() {
    let node = document.createElement('li');
    node.innerHTML = '广州';
    let bj = document.getElementById('bj');
    let city = document.getElementById('city');
    city.insertBefore(node, bj);
}

btn = document.getElementById('btn03');
btn.onclick = function() {
    let node = document.createElement('li');
    node.innerHTML = '广州';
    let bj = document.getElementById('bj');
    let city = document.getElementById('city');
    city.replaceChild(node, bj);
}

btn = document.getElementById('btn04');
btn.onclick = function() {
    let bj = document.getElementById('bj');
    // let city = document.getElementById('city');
    // city.removeChild(bj);
    // bj.parentElement.removeChild(bj);
    bj.parentNode.removeChild(bj);
}

btn = document.getElementById('btn05');
btn.onclick = function() {
    let city = document.getElementById('city');
    console.log(city.innerHTML);
}

btn = document.getElementById('btn06');
btn.onclick = function() {
    let bj = document.getElementById('bj');
    bj.innerText = '杭州';
}

btn = document.getElementById('btn07');
btn.onclick = function() {
    // 不推荐 整个city node重新渲染
    let city = document.getElementById('city');
    city.innerHTML += '<li>广州</li>';
}