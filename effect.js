$(document).ready(function() {
  $(".loading").hide();
  $(".container").show();
  $(".song").hide();
  $(".balloons").hide();
  $(".cake-cover").hide();
  $(".message").hide();
  $(".balloon-border").hide();

  var lightsOn = false;
  $("#turn_on").click(function() {
    lightsOn = !lightsOn;
    if(lightsOn) {
      $("#bulb_yellow").css("background-image", "url('bulb_yellow.png')");
      $("#bulb_red").css("background-image", "url('bulb_red.png')");
      $("#bulb_blue").css("background-image", "url('bulb_blue.png')");
      $("#bulb_green").css("background-image", "url('bulb_green.png')");
      $("#bulb_pink").css("background-image", "url('bulb_pink.png')");
      $("#bulb_orange").css("background-image", "url('bulb_orange.png')");
    } else {
      $(".bulb").css("background-image", "url('bulb.png')");
    }
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
