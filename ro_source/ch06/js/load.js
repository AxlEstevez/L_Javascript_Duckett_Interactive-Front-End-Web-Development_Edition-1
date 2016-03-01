function setup() {
    var textInput;
    textInput = document.getElementById("username");
    textInput.focus();
}

window.addEventListener("load", setup, false);

/* LONGER VERSION WITH IE8 (and lower) compatibility

if (el.addEventListener) {
      el.addEventListener('click', function(e) {
        itemDone(e);
    }, false);
} else {
    el.attachEvent('onload', function(e){
      itemDone(e);
    });
}

*/