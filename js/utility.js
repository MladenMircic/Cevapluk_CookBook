$(document).ready(function() {

    let breadcrumb_num = Math.floor(Math.random() * 4) + 1;
    $(".breadcumb-area").css("background-image", "url(img/bg-img/breadcumb" + breadcrumb_num + ".jpg)");

    $(".flag").click(function() {
        let lang = $(this).attr("id");
        window.open("index-" + lang + ".html", "_self");
    });


});