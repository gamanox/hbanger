var orientationEvent, resize, supportsOrientationChange;

supportsOrientationChange = "onorientationchange" in window;

orientationEvent = (supportsOrientationChange ? "orientationchange" : "resize");

window.addEventListener(orientationEvent, (function() {
  if (window.orientation === 0) {
    $('#rotardispisitivo').css({
      display: 'none'
    });
  } else if (window.orientation === 90) {
    $('#rotardispisitivo').css({
      display: 'block'
    });
  }
}), false);

resize = function() {
  var aspect, ratio, vidH, wH, wW;
  ratio = void 0;
  wH = void 0;
  wW = void 0;
  aspect = 1.33;
  wH = $(window).height();
  wW = $(window).width();
  ratio = wW / wH;
  if (wW > wH) {
    if (ratio > aspect) {
      $(".splashbg").width(wW);
      $(".splashbg").height("auto");
      vidH = $(".splashbg").height();
      return $(".splashbg").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: (wW / 2) * -1 + "px",
        marginTop: ((vidH - wH) / 2) + (wH / 2) * -1 + "px"
      });
    } else {
      $(".splashbg").width(wH * aspect);
      $(".splashbg").height(wH);
      return $(".splashbg").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: ((wH * aspect) / 2) * -1 + "px",
        marginTop: (wH / 2) * -1 + "px"
      });
    }
  } else {
    $(".splashbg").height(wH);
    $(".splashbg").width(wH * aspect);
    return $(".splashbg").css({
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: ((wH * aspect) / 2) * -1 + "px",
      marginTop: (wH / 2) * -1 + "px"
    });
  }
};

$(function() {
  var error, sendNewsletter;
  sendNewsletter = function() {
    return $('.newsbtn p').html('Thanks');
  };
  error = function(response, status, xhr) {
    alert("error");
  };
  $('.showSubscribe').on('click', function() {
    $('.newsbtn').removeClass('showSubscribe');
    $('.newsbtn').addClass('sendformBtn');
    $('.newsletter-cont').addClass('show');
    $('.newsbtn p').html('subscribe');
    return $('.sendformBtn').on('click', function() {
      $('.newsletter-cont').removeClass('show');
      $('.newsbtn p').html('Sending');
      $.post('http://www.mynewsletterbuilder.com/tools/ext_subscribe', $('#subscribe').serialize());
      return $('.newsbtn p').html('Thanks');
    });
  });
  if (navigator.userAgent.match(/iPad/i)) {
    $("#viewport").attr("content", "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0");
    if (window.orientation === 0) {
      return $('#rotardispisitivo').css({
        display: 'block'
      });
    } else if (window.orientation === 90) {
      return $('#rotardispisitivo').css({
        display: 'block'
      });
    }
  }
});

var MainController;

MainController = [
  '$scope', function($scope) {
    return $scope.msg = "Hello World";
  }
];



;

;
//# sourceMappingURL=app.js.map