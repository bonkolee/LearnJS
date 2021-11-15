let menu = document.getElementById('my_menu');
let spanList = menu.getElementsByTagName('span');
let openDiv = spanList[0].parentNode;

for(let i = 0; i < spanList.length; i++) {
    spanList[i].onclick = function() {
        let parentDiv = this.parentNode;
        toggleMenu(parentDiv);
        if (openDiv != parentDiv && !hasClass(openDiv, "collapsed")) {
            toggleMenu(openDiv);
        }
        openDiv = parentDiv;
    };
}

function toggleMenu(tempDiv) {
    let begin = tempDiv.offsetHeight;
    toggleClass(tempDiv, 'collapsed');
    let end = tempDiv.offsetHeight;
    
    tempDiv.style.height = begin + 'px';
    move(tempDiv, "height", end, 10, function() {
        tempDiv.style.height = null;
    });
}