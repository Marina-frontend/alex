//Burger
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('.icon-menu').toggleClass('active');
        $('body'),toggleClass('lock');
    });
});