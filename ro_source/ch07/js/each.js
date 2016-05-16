//

$(function() {
    $("li").each(function() {
        $(this).append(' <span class="order">' + this.id + "</span>");
    });
});