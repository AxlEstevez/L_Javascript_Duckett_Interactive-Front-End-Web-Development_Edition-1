//

$("#register").on("submit", function(e) {
    e.preventDefautl();
    var details = $("#register").serialize();
    $.post("register.php", details, function(data) {
        $("#register").html(data);
    });
});
