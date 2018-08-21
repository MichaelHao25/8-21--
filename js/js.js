$('.header .share>a').on('mouseenter', function (e) {
	e.preventDefault();
	$('.header .share-layout').fadeIn();
})
$('.header .share').on('mouseleave', function (e) {
	e.preventDefault();
	$('.header .share-layout').fadeOut();
})
$('.header .share .close').on('click', function (e) {
	e.preventDefault();
	$('.header .share').trigger('mouseleave');
})
$('.header .child>a').on('mouseenter', function (e) {
	e.preventDefault();
	$('.header .child-menu').fadeIn();
})
$('.header .child').on('mouseleave', function (e) {
	e.preventDefault();
	$('.header .child-menu').fadeOut();
})

$('.goto-top').on('click', function (e) {
	e.preventDefault();
	$('body,html').animate({
		'scrollTop': 0
	}, 500)
})
var mySwiper = new Swiper('.banner-block .swiper-container', {
	loop: true,
	nextButton: '.banner-block .right-arrow',
	prevButton: '.banner-block .left-arrow',
	pagination: '.banner-block .swiper-pagination',
	paginationClickable: true,
})
var mySwiper = new Swiper('.product-detalis-block .swiper-container', {
		nextButton: '.product-detalis-block .swiper-button-next',
		prevButton: '.product-detalis-block .swiper-button-prev',
		paginationClickable: true,
		slidesPerView: 4,
		spaceBetween: 10,
		resistanceRatio: 0,
		onTap: function (swiper) {
			console.log(swiper);
			swiper.slideTo(swiper.clickedIndex, 600, false);
			var src = $(swiper.clickedSlide).find('img').attr('src')
			$('.product-detalis-block .pic .big-pic img').attr('src', src);
		}
	})


	~ function () {
		var height = window.innerHeight;
		$(window).on('scroll', function (e) {
			if (height <= $(window).scrollTop()) {
				$('.goto-top').addClass('active');
			} else {
				$('.goto-top').removeClass('active');
			}
		})
	}()