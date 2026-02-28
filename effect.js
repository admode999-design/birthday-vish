$(document).ready(function() {
  $(".loading").hide();
  $(".container").show();
  $(".song").hide();
  $(".balloons").hide();
  $(".cake-cover").hide();
  $(".message").hide();
  $(".balloon-border").hide();

  $("#turn_on").click(function() {
    $("#bulb_yellow, #bulb_red, #bulb_blue, #bulb_green, #bulb_pink, #bulb_orange").toggleClass("on");
  });

  $("#play").click(function() {
    $(".song").show();
    $(".song")[0].play();
  });

  $("#bannar_coming").click(function() {
    $(".balloon-border").fadeIn();
  });

  $("#balloons_flying").click(function() {
    $(".balloons").fadeIn();
  });

  $("#cake_fadein").click(function() {
    $(".cake-cover").fadeIn();
  });

  $("#light_candle").click(function() {
    $(".fuego").toggleClass("on");
  });

  $("#wish_message").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  $("#story").click(function() {
    $(".message").fadeIn();
    $("html, body").animate({ scrollTop: $(".message").offset().top }, "slow");
  });
});
