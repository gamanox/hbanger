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
      $(".splashbg").width wW
      $(".splashbg").height "auto"
      vidH = $(".splashbg").height()
      $(".splashbg").css
        position: "absolute"
        top: "50%"
        left: "50%"
        marginLeft: (wW / 2) * -1 + "px"
        marginTop: ((vidH-wH)/2)+(wH/2) * -1 + "px"

    else
      $(".splashbg").width wH * aspect
      $(".splashbg").height wH
      $(".splashbg").css
        position: "absolute"
        top: "50%"
        left: "50%"
        marginLeft: ((wH * aspect) / 2) * -1 + "px"
        marginTop: (wH / 2) * -1 + "px"

  else
    $(".splashbg").height wH
    $(".splashbg").width wH * aspect
    $(".splashbg").css
      position: "absolute"
      top: "50%"
      left: "50%"
      marginLeft: ((wH * aspect) / 2) * -1 + "px"
      marginTop: (wH / 2) * -1 + "px"

$ ->

  $('.newsbtn').on 'click', ->
    $('.newsletter-cont').addClass 'show'
    $('.newsbtn p').html 'subscribe'
  #resize()