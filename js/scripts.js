$('.icon-search').click(function (e) {
	$('.input-search, .icon-search').toggleClass('show-input');
});

$('.mini-menu').click(function () {
	$('.menu ul').toggleClass('show');
});


// ------слайдер -----

$(document).ready(function () {
	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: true,
		dots: false,
		prevArrow: "<div class='prev'><img src='/../img/left-arrow.png'></div>",
		nextArrow: "<div class='next'><img src='../img/right-arrow.png'></div>" // без div не работает
	});
});