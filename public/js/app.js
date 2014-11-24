var orientationEvent, pageView, resize, supportsOrientationChange, validateEmail;

validateEmail = function($email) {
  var emailReg;
  emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  if (!emailReg.test($email)) {
    return false;
  } else {
    return true;
  }
};

pageView = function(page) {
  return ga("send", "pageview", "/" + page);
};

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
      var email, emailaddress, url;
      $('.newsbtn p').html('Sending');
      emailaddress = $('.email').val();
      if (!validateEmail(emailaddress)) {
        $('.email').val('');
        $('.email').attr({
          placeholder: 'wrong email'
        });
        return $('.newsbtn p').html('subscribe');
      } else {
        email = $('.email').val();
        url = "http://api.mynewsletterbuilder.com/1.0.2/Subscribe/json/?api_key=aaddbdd8202a5128b7f806aaf9047215&lists=436693&details[email]=" + email;
        console.log(url);
        $.ajax({
          url: url,
          type: "POST",
          crossDomain: true
        });
        $('.newsletter-cont').removeClass('show');
        $('.newsbtn p').html('Thanks');
        pageView('newsletter/sign_up');
        return setTimeout(function() {
          $('.newsbtn').removeClass('sendformBtn');
          return $('.newsbtn').addClass('showSubscribe');
        }, 2000);
      }
    });
  });
  if (navigator.userAgent.match(/iPad/i)) {
    $("#viewport").attr("content", "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0");
    if (window.orientation === 0) {
      return $('#rotardispisitivo').css({
        display: 'none'
      });
    } else if (window.orientation === 90) {
      return $('#rotardispisitivo').css({
        display: 'none'
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