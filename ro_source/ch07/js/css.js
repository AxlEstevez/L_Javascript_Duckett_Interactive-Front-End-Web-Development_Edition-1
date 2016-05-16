//

$(function() {
    var $item = $("li");
    
    $("ul").append("<p>Color was: " + $item.css("background-color") + "</p>");
    
    $item.css({
        "background-color": "#c5a995",
        "border": "1px solid #ffffff",
        "color": "#000000",
        "text-shadow": "none",
        "font-family": "Georgia",
        "padding-left": "+=75"
    });
});