$(document).ready(function(){
    $('.fade-in').fadeIn(3000);
    var $teaser = $('.teaser');

    $teaser.hover(function(){
    	$('img', this).fadeTo(100,.2);
    	$('h2', this).addClass('hover-teaser');
    	$('p', this).removeClass('transparent');
    },function(){
    	$('img', this).fadeTo(100,0.7);
    	$('h2', this).removeClass('hover-teaser');
    	$('p', this).addClass('transparent');
    });
    $('#about-img-container').hover(function(){
    	$('#me-main').addClass('hidden');
    	$('#me-alt').removeClass('hidden');
    },function(){
    	$('#me-alt').addClass('hidden');
    	$('#me-main').removeClass('hidden');
    });

});