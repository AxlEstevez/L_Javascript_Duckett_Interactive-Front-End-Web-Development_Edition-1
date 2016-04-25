//

// function setup() {
//     var textInput;
//     textInput = document.getElementById("username");
//     textInput.focus();
// }
//
// window.addEventListener("load", setup, false);

function setup() {
    var textInput;
    textInput = document.getElementById("username");
    textInput.focus();
}

if (window.addEventListener) {
    window.addEventListener("load", setup, false);
}
else {
    window.attachEvent("onload", setup);
}
