new WOW().init();

var group =1;

var Swiper6 = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    slidesPerView: group,            
    spaceBetween: 0,
    slidesPerGroup: group,
    loop: true,
});

var SwiperRev = new Swiper('.testimonials .swiper-container', {
    pagination: '.testimonials-pagination .swiper-pagination',
    loop: true,
});

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