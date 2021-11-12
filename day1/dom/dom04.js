let btn = document.getElementById('checkedAllBtn');
btn.onclick = function() {
    let chk = document.getElementsByName('items');
    chk.forEach(element => {
        element.checked = true;
    });
    let chkAll = document.getElementById('checkedAllBox');
    chkAll.checked = true;
}

btn = document.getElementById('checkedNoBtn');
btn.onclick = function() {
    let chk = document.getElementsByName('items');
    chk.forEach(element => {
        element.checked = false;
    });
    let chkAll = document.getElementById('checkedAllBox');
    chkAll.checked = false;
}

btn = document.getElementById('checkedRevBtn');
btn.onclick = function() {
    let chk = document.getElementsByName('items');
    chk.forEach(element => {
        element.checked = !element.checked;
    });
    helper();
}

btn = document.getElementById('sendBtn');
btn.onclick = function() {
    let chk = document.getElementsByName('items');
    let result = [];
    chk.forEach(element => {
        if (element.checked) {
            result.push(element.value);
        }
    });
    alert(result);
}

btn = document.getElementById('checkedAllBox');
btn.onclick = function() {
    let chk = document.getElementsByName('items');
    chk.forEach(element => {
        element.checked = this.checked;
    });
}

let chk = document.getElementsByName('items');
chk.forEach(element => {
    element.onclick = helper;
});

function helper() {
    let chk = document.getElementsByName('items');
    let chkAll = document.getElementById('checkedAllBox');
    for (let i = 0; i < chk.length; i++) {
        if (!chk[i].checked) {
            chkAll.checked = false;
            return;
        }
    }
    chkAll.checked = true;
};