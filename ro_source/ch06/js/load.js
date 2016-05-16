function setup() {
    var textInput;
    textInput = document.getElementById("username");
    textInput.focus();
}

if (window.addEventListener) {
    window.addEventListener("load", function() {
        setup();
    }, false)
}
else {
    window.attachEvent("onload", function() {
        setup();
    });
}