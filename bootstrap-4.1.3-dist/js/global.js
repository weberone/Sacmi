//Preloader
$(window).on("load",function(){
    //$('#wrapper').animate({'opacity': 1}, 'slow');
    $('#preloader').fadeOut('slow',function(){$(this).remove();});
});

// Menu Sideaber
document.documentElement.className = 'js'; // adds class="js" to <html> element
function uncheckboxes(nav){
    var navarray = document.getElementsByName(nav);
    for(var i = 0; i < navarray.length; i++){
        navarray[i].checked = false
    }     
}



$( "#burger_btn_menu, .close-all, .modal_menu, #close_sidebar" ).click(function() {
    $( ".modal_menu" ).toggleClass( "view_modal" );
});
