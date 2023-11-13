


$(function(){
    $('.has-sub').on('click', function(e) { // Get all dropdown menu toggles
        $('.dropdown-menu').not($(this).children('.dropdown-menu')).removeClass('dropdown-shown'); // Hide all other dropdown menus
        $('.has-sub').not($(this)).removeClass('active'); // Remove the active selector from the other dropdown toggles
        $(this).children('.dropdown-menu').toggleClass('dropdown-shown'); // Show/hide the dropdown menu associated with the toggle being clicked
        $(this).toggleClass('active'); // Toggle the active selector on the nav-item
    });
    $('.rw-nav-menu-btn').on('click', function(e) { // Get all dropdown menu toggles
        $("#" + $(this).data("navid")).toggleClass('active'); // Hide all other dropdown menus
        $(this).toggleClass('active'); // Hide all other dropdown menus
    });
  });