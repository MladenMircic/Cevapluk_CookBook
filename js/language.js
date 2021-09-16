$(document).ready(function() {

    $(".flag").click(function() {
        let lang = $(this).attr("id");
        window.open("index-" + lang + ".html", "_self");
    });
});