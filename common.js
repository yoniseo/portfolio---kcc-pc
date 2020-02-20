$(document).ready(function(){
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		auto : true,
		captions: true,
		controls: false
	});
	
	$('.bxslider_notice').bxSlider({
		mode: 'horizontal',
		auto : false,
		captions: false,
		controls: true,
		pager: false,
		infiniteLoop: false,
		hideControlOnEnd: true,
		speed: '10',
	});

	$('.mo_btn, .mo-gnb-shadow').on('click', function(){
		$('html').toggleClass('show');
	});
	$('.mm').on('mouseenter', function(){
		$('.mm_sub').css('display','block')
	});
	$('.mm').on('mouseleave', function(){
		$('.mm_sub').hide();
	});
});

var mn = ['01','02','03','04','05','06','07','08','09','10','11','12'];
var dw = ['mon','tue','wed','thu','fri','sat','sun']
var nd = new Date();
var thisMonth = mn[nd.getMonth()];
var thisWeek = dw[nd.getDay()];
var d = nd.getDate();
$('.date').html(thisMonth+'.'+' '+d+'.'+' '+thisWeek);
