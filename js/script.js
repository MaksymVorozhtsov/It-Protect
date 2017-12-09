function OffScroll () {
    var winScrollTop = $(window).scrollTop();
        $(window).bind('scroll',function () {
        $(window).scrollTop(winScrollTop);
    });
}

$(document).ready(function () {
	$('a#cost').click(function (event){
		event.preventDefault();
		$('#overlay').fadeIn(400, function (){
            $('#modal').css('display', 'block').animate({opacity: 1}, 200);
            OffScroll();
		});
	});
	$('#overlay, .modal-close').click( function (){
		$('#modal').animate({opacity: 0}, 200,
            function(){
                $(this).css('display', 'none');
                $('#overlay').fadeOut(400);
                $(window).unbind('scroll');
            }
        );
	});
});

new WOW().init();