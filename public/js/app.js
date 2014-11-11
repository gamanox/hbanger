var resize;

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
  return $('.newsbtn').on('click', function() {
    $('.newsletter-cont').addClass('show');
    return $('.newsbtn p').html('subscribe');
  });
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