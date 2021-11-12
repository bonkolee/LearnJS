let areaDiv = document.getElementById('areaDiv');
let showMsg = document.getElementById('showMsg');
let icon = document.getElementById('icon');
console.log(icon);

areaDiv.onmousemove = function(event) {
    showMsg.innerHTML = "x = " + event.clientX + " y = " + event.clientY;
}

areaDiv.onmouseout = function(event) {
    console.log(event);
    showMsg.innerHTML = "x = NaN y = NaN";
}

document.onmousemove = function(event) {
    // icon.style.left = (event.pageX - Math.round(icon.clientWidth / 2)) + '.px';
    // icon.style.top = (event.pageY - Math.round(icon.clientHeight / 2)) + '.px';
    icon.style.left = (event.clientX + document.documentElement.scrollLeft - Math.round(icon.clientWidth / 2)) + '.px';
    icon.style.top = (event.clientY + document.documentElement.scrollTop - Math.round(icon.clientHeight / 2)) + '.px';

}