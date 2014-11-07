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
      $("#video").width(wW);
      $("#video").height("auto");
      vidH = $("#video").height();
      return $("#video").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: (wW / 2) * -1 + "px",
        marginTop: ((vidH - wH) / 2) + (wH / 2) * -1 + "px"
      });
    } else {
      $("#video").width(wH * aspect);
      $("#video").height(wH);
      return $("#video").css({
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: ((wH * aspect) / 2) * -1 + "px",
        marginTop: (wH / 2) * -1 + "px"
      });
    }
  } else {
    $("#video").height(wH);
    $("#video").width(wH * aspect);
    return $("#video").css({
      position: "absolute",
      top: "50%",
      left: "50%",
      marginLeft: ((wH * aspect) / 2) * -1 + "px",
      marginTop: (wH / 2) * -1 + "px"
    });
  }
};

$(function() {
  return resize();
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