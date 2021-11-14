/**
 * BOM 浏览器对象
 * BOM可以使我们通过JS来操作浏览器
 * 在BOM中为我们提供了一组对象，用来完成对浏览器的操作
 * BOM 对象
 * Window 窗口，是网页中的全局对象
 * Navigator 代表当前浏览器的信息，可以识别不同浏览器
 * Location 浏览器的地址栏信息
 * History 浏览器的历史记录 不能获取到具体的历史记录，只能操作浏览器向前或向后翻页
 *          而且只在当次访问时有效
 * Screen 用户的屏幕信息
 */

console.log(window);
console.log(navigator);
console.log(navigator.userAgent);
console.log(location);
console.log(history);
console.log(screen);

let a = document.getElementById('a1');
a.onclick = function() {
    console.log(history);
    history.back();
}