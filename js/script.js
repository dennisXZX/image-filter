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

    // register an keypress handler
    $("#searchBar").keyup(function() {
        
        // retrieve the search value
        let searchTerm = $("#searchTerm").val();

        // loop through all the items
        $(".itemWrapper").each(function(){
 
            // fade the item out if it does not contain the search term
            if ($(this).find(".caption").text().search(new RegExp(searchTerm, "i")) < 0) {

                $(this).animate({opacity: 0,}, 300);
 
            // show the item if the search term matches
            } else {
                $(this).animate({opacity: 1,}, 300);
            }
            
        });        

    });

});