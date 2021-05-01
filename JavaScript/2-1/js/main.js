function change_red() {
var box = document.getElementById('box');
box.style.color="#ff0000";
}

window.onload = function() {
    var box = document.getElementById('box');
    box.addEventListener('click', change_red, false);
}