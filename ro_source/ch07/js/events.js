//

$(function() {
    var $listItems = $("li");

    $listItems.on("mouseover click", function() {
        $listItems.children("span").remove();
        $(this).append(" <span class='priority'>" + this.id + "</span>");
    });

    $listItems.on("mouseout", function() {
        $(this).children("span").remove();
    });
});