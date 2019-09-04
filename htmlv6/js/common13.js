$(function () {

	var navp = $('.right_box');
	$(window).scroll(function () {
		if ($(window).scrollTop() <= 40) {
			navp.css({
				'display': 'none',
				'opacity': '0',
			});
		} else {
			navp.css({
				'display': 'block',
				'opacity': '1',
			});
		}
	});
	
// 影像地圖RWD
$('map').imageMapResize();

if ($(window).outerWidth() < 768) {
	//hashtag滑動 
	$('area[href^="#"], a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top - 45
		}, 300);

		if (!$('#menu').hasClass("mFixed")){
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top - 91
			}, 300);
		}
	});
} else {
	$('area[href^="#"],a[href^="#"]').on('click', function (event) {
		var target = $(this.getAttribute('href'));
		event.preventDefault();
		$('html, body').stop().animate({
			scrollTop: target.offset().top
		}, 300);
	});	
};
// Mobile 置頂選單控制
$(window).scroll(function () {
	var window_top = $(window).scrollTop();
	var div_top = $('#menu').height();
	if (window_top > div_top) {
		$('#menu').addClass('mFixed');
	} else {
		$('#menu').removeClass('mFixed');
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
	$('.menu_box').addClass('scroll_mob');
} else {
	console.log('pc');
	$('.menu_box').addClass('scroll_pc');
};

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

$(".linkmore").on("click", function() {
	$(".fixedbutton_more").toggleClass("open")
});

// 滑動
$('.gotop').click(function () {
	$('html,body').animate({ scrollTop: '0px' }, 300);
});


$( "#primecard" ).click(function() {	
	$("#cardbox").show();		
	$(".flip").removeClass('change');	
	$(".flip").addClass('rubberBand');
	$(".fgh").show();
	$(".cashbox").show();

setTimeout(function() {
	$(".front").removeClass('rr');
	$(".back").removeClass('rr');
},2400);			

setTimeout(function() {
	$(".c1").addClass('coin1');
	$(".c2").addClass('coin2');
	$(".c3").addClass('coin3');
	$(".c4").addClass('coin2');
	$(".c5").addClass('coin1');
	$(".c6").addClass('coin3');
},2600);	

// ev.preventDefault();

});

$( ".flip, .cardclose" ).click(function() {	
	$(".flip").removeClass('rubberBand');
	$(".flip").addClass('change');
	$(".fgh").hide();
	$(".cashbox").hide();
	$(".front").addClass('rr');
	$(".back").addClass('rr');
	$(".c1").removeClass('coin1');
	$(".c2").removeClass('coin2');
	$(".c3").removeClass('coin3');
	$(".c4").removeClass('coin2');
	$(".c5").removeClass('coin1');
	$(".c6").removeClass('coin3');

	setTimeout(function() {
		$("#cardbox").hide();
		$(".popup2").addClass('fill').addClass('animated');
	},1000);

});

$(document).keyup(function(e){
	if(e.keyCode === 27){
			$(".flip").removeClass('rubberBand');
			$(".flip").addClass('change');
			$(".fgh").hide();
			$(".cashbox").hide();
			$(".front").addClass('rr');
			$(".back").addClass('rr');
			$(".c1").removeClass('coin1');
			$(".c2").removeClass('coin2');
			$(".c3").removeClass('coin3');
			$(".c4").removeClass('coin2');
			$(".c5").removeClass('coin1');
			$(".c6").removeClass('coin3');

			setTimeout(function() {
				$("#cardbox").hide();
				$(".popup2").addClass('fill').addClass('animated');
			},1000);
	}	
});	

$('#RMenuOutF').click(function() {
	$(this).hide(), $('#RMenuInF').show(), $('#sliderRightF').animate({
		left: '-210px'
	})
}), $('#RMenuInF').click(function() {
	$(this).hide(), $('#RMenuOutF').show(), $('#sliderRightF').animate({
		left: '0px'
	})
}); 

$( ".mainstage" ).click(function() {
	$(this).toggleClass( "active" );
		if ($( ".mainstage" ).is('.active')){
				$(".mainstage img").attr("src","img/icon_01-1.png");
			}else {
				$(".mainstage img").attr("src","img/sidebar_icon1.png");
		};
});	
			
$(".mainstage").hover(
	function(e){ $(".mainstage img").attr("src","img/icon_01-1.png"); }, // over
	function(e){ $(".mainstage img").attr("src","img/sidebar_icon1.png");}  // out
);
			
$(".substage").hover(
	function(e){ $(".substage img").attr("src","img/icon_02-1.png"); }, // over
	function(e){ $(".substage img").attr("src","img/sidebar_icon2.png");}  // out
);


});


// 手機版底頂選單開關
$( ".openF" ).click(function(e) {
	e.preventDefault();
	$(this).toggleClass( "active" );
	
		if ($( ".openF, .substage" ).is('.active')){
				$(".openF img, .substage img").attr("src","img/icon_02-1.png");
				$(".right_box").hide();
				$(".openF, .substage").hover(function() {
					$(".substage > img").attr("src","img/icon_02-1.png"); // over
					$(".substage > img").attr("src","img/sidebar_icon2.png");  // out
				}, function() {
					$(".openF > img").attr("src","img/sidebar_icon2.png");
					$(".right_box").show();
				}
			);
		};
	
	$( ".RsubmenuF" ).toggleClass( "active" );
	$(".blackBoxF").toggleClass( "active" );
});	
			
$( ".blackBoxF, .submenu_close" ).click(function() {
	$(".openF").removeClass( "active" );
	$( ".RsubmenuF" ).removeClass( "active" );
	$(".blackBoxF").removeClass( "active" );
	$(".openF img").attr("src","img/sidebar_icon2.png");
});	

