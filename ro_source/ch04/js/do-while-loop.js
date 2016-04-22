//

var i = 1;
var msg = "";

do {
    msg += i + " x 5 = " + (i * 5) + "<br />";
    i++;
} while (i < 5);

document.getElementById("answer").innerHTML = msg;