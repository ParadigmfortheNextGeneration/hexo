$(document).ready(function() {
    $(".lazy:in-viewport").each(function() {
        $(this).hide().attr("src", $(this).attr("data-src")).fadeIn(500).removeClass("lazy");
    });
    $(window).bind("scroll", function(event) {
        $(".lazy:in-viewport").each(function() {
            $(this).hide().attr("src", $(this).attr("data-src")).fadeIn(500).removeClass("lazy");
        });
    });

});