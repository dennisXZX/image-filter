$(document).ready(function(){

    // animate the items
    $(".item")
        .mouseover(function() {            
            $(this).css('opacity', '0.6');
            $(this).find(".caption").addClass('animated wobble');
        })
        .mouseout(function() {
            $(this).css('opacity', '1');
            $(this).find(".caption").removeClass('animated wobble');            
        });    

    // seed data
    const nameArr = [
        "Dennis", "Zoe", "Jasen",
        "Tom", "John", "Ricky",
        "Ken", "Bob", "Nancy"
    ]

});