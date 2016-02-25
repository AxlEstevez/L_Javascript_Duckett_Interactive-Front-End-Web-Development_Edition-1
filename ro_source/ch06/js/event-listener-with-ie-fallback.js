var elUsername = document.getElementById("username");   // Get username input
var elMsg = document.getElementById("feedback");        // Get feedback element

function checkUsername(minLength) {                     // Declare function
    if (elUsername.value.length < minLength) {          // If username too short
        elMsg.innerHTML = "Username must be " + minLength + " characters or more";
    }
    else {                                              // Otherwise
        elMsg.innerHTML = "";                           // Clear message
    }
}

if (elUsername.addEventListener) {
    elUsername.addEventListener("blur", function() {
        checkUsername(5);
    }, false);
}
else {
    elUsername.attachEvent("onblur", function() {
        checkUsername(5);
    });
}