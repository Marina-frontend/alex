//Burger
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('.icon-menu, .menu__body').toggleClass('menu-open');
        $('body'),toggleClass('lock');
    });
});