$(document).ready(function(){

    $(".item")
        .mouseover(function() {
            $(this).css('opacity', '0.6');
        })
        .mouseout(function() {
            $(this).css('opacity', '1');
        });    

});