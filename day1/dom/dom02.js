var btn = document.getElementById('btn01')
btn.onclick = function() {
    var bj = document.getElementById('bj')
    console.log(bj, bj.innerHTML);
}

btn = document.getElementById('btn02')
btn.onclick = function() {
    var li = document.getElementsByTagName('li');
    var result = [];
    // for (var i = 0; i < li.length; i++) {
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
    var a = document.getElementsByName('gender');
    var result = [];
    a = new Array(...a);
    a.forEach(element => {
        result.push(element.value);
    });
    console.log(result);
}

btn = document.getElementById('btn04')
btn.onclick = function() {
    var li = document.getElementById('city');
    var result = [];
    li = new Array(...li);
    li.forEach(element => {
        result.push(element.value);
    });
    console.log(result);
}