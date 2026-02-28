$(document).ready(function(){

	$('.loading').hide();
	$('.container').show();

	$('#turn_on').click(function(){
		var lightsOn = $(this).data('on');
		if(!lightsOn){
			$(this).data('on', true);
			$('.bulb').each(function(){
				var id = $(this).attr('id');
				if(id === 'bulb_yellow') $(this).css({'background-image':'url(bulb_yellow.png)','box-shadow':'0 0 15px 5px #FFD700'});
				if(id === 'bulb_red')    $(this).css({'background-image':'url(bulb_red.png)','box-shadow':'0 0 15px 5px #FF0000'});
				if(id === 'bulb_blue')   $(this).css({'background-image':'url(bulb_blue.png)','box-shadow':'0 0 15px 5px #0000FF'});
				if(id === 'bulb_green')  $(this).css({'background-image':'url(bulb_green.png)','box-shadow':'0 0 15px 5px #00FF00'});
				if(id === 'bulb_pink')   $(this).css({'background-image':'url(bulb_pink.png)','box-shadow':'0 0 15px 5px #FF69B4'});
				if(id === 'bulb_orange') $(this).css({'background-image':'url(bulb_orange.png)','box-shadow':'0 0 15px 5px #FF8C00'});
			});
			$('body').css('background-color','#FDEBD0');
			$(this).fadeOut('slow').delay(3000).promise().done(function(){
				$('#holi').fadeIn('slow');
			});
		}
	});

	$('#holi').click(function(){
		$(this).prop('disabled', true).text('🌈 Holi Hai! 🌈');
		startHoli();
	});

	$('#play').click(function(){
		var audio = $('.song')[0];
		audio.play();
		$('body').css('background-color','#FFF5F5');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').show().css({opacity:0, marginTop:'-100px'}).animate({opacity:1, marginTop:'0'},1000);
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne()   { $('#b1').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopOne); }
	function loopTwo()   { $('#b2').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopTwo); }
	function loopThree() { $('#b3').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopThree); }
	function loopFour()  { $('#b4').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopFour); }
	function loopFive()  { $('#b5').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopFive); }
	function loopSix()   { $('#b6').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopSix); }
	function loopSeven() { $('#b7').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopSeven); }

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne(); loopTwo(); loopThree(); loopFour(); loopFive(); loopSix(); loopSeven();
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		var vw = $(window).width()/2;
		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22');
		$('#b3').attr('id','b33');
		$('#b4').attr('id','b44');
		$('#b5').attr('id','b55');
		$('#b6').attr('id','b66');
		$('#b7').attr('id','b77');
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		var i = 1;
		function msgLoop(i) {
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000).fadeOut('slow').promise().done(function(){
				i = i+1;
				if(i <= 14){ msgLoop(i); }
			});
		}
		msgLoop(1);
	});

});

function startHoli(){
	running = true;
	requestAnimationFrame(holiLoop);
	const W = canvas.width, H = canvas.height;
	const throws = [
		{d:0,   ox:-5,    oy:H*.3,  dx:1,    dy:0.1,  c:colors[0]},
		{d:200, ox:-5,    oy:H*.55, dx:1,    dy:0.05, c:colors[2]},
		{d:400, ox:-5,    oy:H*.75, dx:1,    dy:-0.1, c:colors[3]},
		{d:100, ox:W+5,   oy:H*.25, dx:-1,   dy:0.15, c:colors[4]},
		{d:300, ox:W+5,   oy:H*.5,  dx:-1,   dy:0.05, c:colors[5]},
		{d:500, ox:W+5,   oy:H*.7,  dx:-1,   dy:-0.1, c:colors[1]},
		{d:550, ox:W*.2,  oy:-5,    dx:0.1,  dy:1,    c:colors[6]},
		{d:650, ox:W*.5,  oy:-5,    dx:0,    dy:1,    c:colors[7]},
		{d:750, ox:W*.8,  oy:-5,    dx:-0.1, dy:1,    c:colors[8]},
		{d:1000,ox:-5,    oy:H*.4,  dx:1,    dy:0.2,  c:colors[9]},
		{d:1100,ox:W+5,   oy:H*.35, dx:-1,   dy:0.15, c:colors[0]},
		{d:1200,ox:W*.15, oy:-5,    dx:0.2,  dy:1,    c:colors[3]},
		{d:1300,ox:W*.85, oy:-5,    dx:-0.2, dy:1,    c:colors[5]},
		{d:1600,ox:-5,    oy:H*.45, dx:1,    dy:0,    c:colors[2]},
		{d:1650,ox:W+5,   oy:H*.45, dx:-1,   dy:0,    c:colors[6]},
	];
	throws.forEach(t => setTimeout(() => burst(t.ox, t.oy, t.dx, t.dy, t.c), t.d));
	setTimeout(() => { running = false; }, 2200);
	setTimeout(() => { $('#play').fadeIn('slow'); }, 3200);
}
