# Angular initialization only (and global scope handlers)
# use appropriate directories for controllers/directives etc.

# angular_app = angular.module('hbanger', [])

# angular_app
# .run(
#   [
#     "$rootScope",
#     ($rootScope) ->
#       # Global events such as $(window).resize
#       return
#   ]
# )


resize = ->
  ratio = undefined
  wH = undefined
  wW = undefined
  aspect = 1.33
  wH = $(window).height()
  wW = $(window).width()
  ratio = wW / wH
  if wW > wH
    if ratio > aspect
      $("#video").width wW
      $("#video").height "auto"
      vidH = $("#video").height()
      $("#video").css
        position: "absolute"
        top: "50%"
        left: "50%"
        marginLeft: (wW / 2) * -1 + "px"
        marginTop: ((vidH-wH)/2)+(wH/2) * -1 + "px"

    else
      $("#video").width wH * aspect
      $("#video").height wH
      $("#video").css
        position: "absolute"
        top: "50%"
        left: "50%"
        marginLeft: ((wH * aspect) / 2) * -1 + "px"
        marginTop: (wH / 2) * -1 + "px"

  else
    $("#video").height wH
    $("#video").width wH * aspect
    $("#video").css
      position: "absolute"
      top: "50%"
      left: "50%"
      marginLeft: ((wH * aspect) / 2) * -1 + "px"
      marginTop: (wH / 2) * -1 + "px"

$ ->


  resize()