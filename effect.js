$(document).ready(function(){

	$('.loading').hide();
	$('.container').show();
	$('.message').hide();
	$('.cake').hide();
	$('.bannar').hide();
	$('.balloon-border').hide();
	$('.balloons').hide();
	$('.fuego').hide();

	// STEP 1 - Turn On Lights
	$('#turn_on').click(function(){
		$('#bulb_yellow').css('background-image','url(bulb_yellow.png)');
		$('#bulb_red').css('background-image','url(bulb_red.png)');
		$('#bulb_blue').css('background-image','url(bulb_blue.png)');
		$('#bulb_green').css('background-image','url(bulb_green.png)');
		$('#bulb_pink').css('background-image','url(bulb_pink.png)');
		$('#bulb_orange').css('background-image','url(bulb_orange.png)');
		$('body').css('background-color','#FDEBD0');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#holi').fadeIn('slow');
		});
	});

	// STEP 2 - Holi
	$('#holi').click(function(){
		$(this).prop('disabled',true).text('🌈 Holi Hai! 🌈');
		startHoli();
	});

	// STEP 3 - Play Music
	$('#play').click(function(){
		$('.song')[0].play();
		$('body').css('background-color','#FDEBD0');
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	// STEP 4 - Decorate
	$('#bannar_coming').click(function(){
		$('.bannar').show();
		$('.balloon-border').show();
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	// STEP 5 - Balloons
	function loopOne()   { if($('#b1').length){ $('#b1').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopOne); }}
	function loopTwo()   { if($('#b2').length){ $('#b2').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopTwo); }}
	function loopThree() { if($('#b3').length){ $('#b3').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopThree); }}
	function loopFour()  { if($('#b4').length){ $('#b4').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopFour); }}
	function loopFive()  { if($('#b5').length){ $('#b5').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopFive); }}
	function loopSix()   { if($('#b6').length){ $('#b6').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopSix); }}
	function loopSeven() { if($('#b7').length){ $('#b7').animate({left:1000*Math.random(),bottom:500*Math.random()},10000,loopSeven); }}

	$('#balloons_flying').click(function(){
		$('.balloons').show();
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		loopOne(); loopTwo(); loopThree(); loopFour(); loopFive(); loopSix(); loopSeven();
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	// STEP 6 - Cake
	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	// STEP 7 - Candles
	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	// STEP 8 - Happy Birthday balloons
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

	// STEP 9 - Message
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').show();
			var i = 1;
			function msgLoop(i){
				$('.message p:nth-child('+i+')').fadeIn('slow').delay(1500).fadeOut('slow').promise().done(function(){
					i = i + 1;
					if(i <= 14){ msgLoop(i); }
				});
			}
			msgLoop(1);
		});
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
	setTimeout(() => { $('#holi').fadeOut(); $('#play').fadeIn('slow'); }, 3200);
}
