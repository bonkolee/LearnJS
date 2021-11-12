function helper() {
    let tbody = this.parentNode.parentNode.parentNode;
    let tr = this.parentNode.parentNode;
    if (confirm("确认" + tr.firstElementChild.innerText + "删除")) {
        tbody.removeChild(tr);
    }
    // 取消默认行为
    return false;
}

let a = document.getElementsByTagName('a');
a = new Array(...a);
a.forEach(element => {
    element.onclick = helper;
});

let btn = document.getElementById('addEmpButton');

btn.onclick = function() {    
    let values = document.getElementsByTagName('input');
    let tr = document.createElement('tr');
    for (let i = 0; i < values.length; i++) {
        
        let td = document.createElement('td');
        let temp = values[i].value.trim();
        if (temp) {
            td.innerText = temp;
        } else {
            alert('不能为空');
            return;
        }
        tr.appendChild(td);
    }

    let new_a = document.createElement('a');
    new_a.onclick = helper;
    new_a.innerText = 'Delete';
    new_a.href = 'javascript:;';
    let td = document.createElement('td');
    td.appendChild(new_a);

    tr.appendChild(td);
    let tbody = document.querySelector('#employeeTable tbody');
    tbody.appendChild(tr);
    for (let i = 0; i < values.length; i++) {
        values[i].value = null;
    }
}