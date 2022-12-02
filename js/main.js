// Hamburger Menu (Mobile Nav) // 

// The hamburger menu will show and hide when it's being clicked in responsive view // 

$(document).ready(function(){
$('.btn').click(function(){
    $('.items').toggleClass("show");
    $('ul li').toggleClass("hide");
});
});