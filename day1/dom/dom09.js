let p = document.getElementById('info');
for (let i = 0; i < 50; i++) {
    p.innerHTML += '怕上火暴王老菊，真名施皆男，别名老菊，上海人，哔哩哔哩直播平台网络红人。';
    if (i % 10 == 0) {
        p.innerHTML += '\n';
    }
}

p.onscroll = function() {
    let already = document.getElementsByTagName('input');
    if (this.scrollHeight - this.scrollTop == this.clientHeight) {
        for (var i = 0; i < already.length; i++) {
            already[i].disabled = false;
        }
    } else {
        for (var i = 0; i < already.length; i++) {
            already[i].disabled = true;
        }
    }
}