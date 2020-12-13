$(function () {

	// PChome APP開啟時不顯示下載banner
	var useragent = navigator.userAgent;
	var useAPP = useragent.match(/PChome/);
	if (useAPP == 'PChome') {
		$('.app_download, .footer, .right_box').addClass('useAPP');
	}

	// 關閉 固定置底APP Banner
	$('.app_close').click(function () {
		$('.app_download').hide(100);
		$('.footer').addClass('noAPP');
		$('.right_box').addClass('noAPP');
	});

	// 側邊 LINE，FB分享
	$('.share').click(function () {
		$('.more_shore').toggleClass("open_all");
	});
	var navp = $('.right_box');
	$(window).scroll(function () {
		if ($(window).scrollTop() == 0) {
			navp.css({
				'display': 'none',
				'opacity': '0',
				'width': '0'
			});
			$('.primecard').css('width', '0');

		} else {
			navp.css({
				'display': 'block',
				'opacity': '1',
				'width': '42px'
			});
			$('.primecard').css('width', '65px');
		}
	});

	// 滑動
	$('.gotop').click(function () {
		$('html,body').animate({ scrollTop: '0px' }, 300);
	});
	// Smooth scrolling with links, hashtag滑動 
	$('area[href^="#"], a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		if (target.length) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 300);
		}
	});

	// 裝置判斷 PC or Mobile
	var isMobile = {
		iMob: function () {
			return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i);
		}
	};
	if (isMobile.iMob()) {
		console.log('mob');
		$('#menu').addClass('scroll_mob');

		// 連結滑動效果，Mobile不同定位
		$.scrollTo = $.fn.scrollTo = function (x, y, options) {
			if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
			var mobTopmenu = -($('#mob_topmenu').outerHeight() - -45);

			options = $.extend({}, {
				gap: {
					x: 0,
					y: mobTopmenu
				},
				animation: {	// 滑動效果設定
					easing: 'swing',
					duration: 300,
					complete: $.noop,
					step: $.noop
				}
			}, options);

			return this.each(function () {
				var elem = $(this);
				elem.stop().animate({
					scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
					scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
				}, options.animation);
			});
		};

		$("#menu a").click(function (evn) {
			evn.preventDefault();
			$('html,body').scrollTo(this.hash, this.hash);
		});

	} else {
		console.log('pc');
		$('#menu').addClass('scroll_pc');
	};
	$('.header_mobile .media_share').click(function () {
		$('.header_mobile ul.social_media').toggle();
	});


	// 側選單
	$('.arrow_right').click(function () {
		$(this).hide();
		$('.arrow_left').show();
		$("ul.menu_box").animate({ right: '-122px' });
	});

	$('.arrow_left').click(function () {
		$(this).hide();
		$('.arrow_right').show();
		$("ul.menu_box").animate({ right: '0px' });
	});

	// 禁用雙指縮放
	document.documentElement.addEventListener('touchstart', function (event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	}, false);

	// 禁用手指雙擊縮放
	var lastTouchEnd = 0;
	document.documentElement.addEventListener('touchend', function (event) {
		var now = Date.now();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);
	// 影像地圖RWD
	// $('map').imageMapResize();


});